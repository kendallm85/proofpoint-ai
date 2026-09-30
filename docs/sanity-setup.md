# Sanity setup

ProofPoint uses the current Sanity + Next.js App Router integration.

## Local setup
1. Use Node.js 22.12+.
2. Copy `.env.example` to `.env.local`.
3. Create or connect a Sanity project and set its project ID/dataset.
4. Run `npm install`, then `npm run dev`.

## Studio
The Sanity Studio is configured at `/studio`. After dependencies are installed, deploy the schema with:

```bash
npx sanity schema deploy
```

A deployed Studio schema is required before a Sanity Context MCP endpoint can serve a dataset in GROQ mode.

## Context MCP
Create a Sanity Context MCP endpoint backed by the ProofPoint dataset. Current Sanity requirements are:

- Context must be enabled for the organization.
- The dataset schema must be deployed from Studio v5.1.0 or later.
- The MCP endpoint must use a dataset source in the form `PROJECT_ID.DATASET_NAME`.
- The agent needs an organization API token with Context Viewer permission.
- Keep `SANITY_ORGANIZATION_TOKEN` server-side; never expose it as a `NEXT_PUBLIC_` variable.

Set these server-only variables in `.env.local`:

```text
SANITY_CONTEXT_MCP_URL="https://api.sanity.io/v1/context/organizations/YOUR_ORGANIZATION_ID/mcp/YOUR_ENDPOINT_NAME"
SANITY_ORGANIZATION_TOKEN="YOUR_ORGANIZATION_CONTEXT_VIEWER_TOKEN"
OPENAI_API_KEY="YOUR_OPENAI_API_KEY"
OPENAI_MODEL="gpt-5-mini"
```

The ProofPoint agent route is `POST /api/agent` with:

```json
{"question":"What changed in the requirements for RR-2026-014?"}
```

The route fetches Sanity Context initial context, connects to the read-only MCP endpoint, gives the model the available Context tools, and returns the agent response.

## Synthetic fixture
`fixtures/procurement-opportunity.json` is synthetic. It models an opportunity where Amendment 1 changes insurance coverage from $1M to $2M and moves the deadline from Oct. 10 to Oct. 15, 2026.

The fixture is intentionally designed to test evidence retrieval, amendment preservation, and qualification reasoning.

No production/client data belongs in this repository.
