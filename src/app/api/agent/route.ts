import { createMCPClient } from "@ai-sdk/mcp";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = typeof body?.question === "string" ? body.question.trim() : "";

    if (!question) {
      return NextResponse.json({ error: "question is required" }, { status: 400 });
    }

    const endpoint = requiredEnv("SANITY_CONTEXT_MCP_URL");
    const token = requiredEnv("SANITY_ORGANIZATION_TOKEN");
    const model = process.env.OPENAI_MODEL || "gpt-5-mini";

    const headers = { Authorization: `Bearer ${token}` };
    const initialContextResponse = await fetch(`${endpoint.replace(/\/$/, "")}/initial-context`, {
      headers,
      cache: "no-store",
    });

    if (!initialContextResponse.ok) {
      throw new Error(
        `Sanity initial context failed: ${initialContextResponse.status} ${await initialContextResponse.text()}`,
      );
    }

    const initialContext = await initialContextResponse.text();
    const mcpClient = await createMCPClient({
      transport: {
        type: "http",
        url: endpoint,
        headers,
      },
    });

    try {
      const allTools = await mcpClient.tools();
      const { initial_context: _initialContextTool, ...tools } = allTools;

      const result = await generateText({
        model: openai(model),
        system: [
          "You are ProofPoint, an evidence-first business opportunity analyst.",
          "Use Sanity Context MCP tools to retrieve structured evidence before making claims.",
          "Separate verified facts, evidence gaps, conflicts, and interpretation.",
          "Preserve amendment history rather than silently treating changed values as if they were original.",
          "Never make the final pursuit decision for the user. Return a decision context for human review.",
          "",
          "Sanity Context initial context:",
          initialContext,
        ].join("\n"),
        tools,
        prompt: question,
      });

      return NextResponse.json({
        answer: result.text,
        question,
        model,
        evidenceFirst: true,
      });
    } finally {
      await mcpClient.close();
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected agent error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
