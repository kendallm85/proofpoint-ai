# ProofPoint AI

**Evidence before decisions.**

ProofPoint is an open-source AI agent prototype for analyzing business opportunities using structured content, evidence, requirements, amendments, and qualification data.

## Sanity Challenge 2026

This repository is being developed for the Sanity Challenge — Path One: **Ship an Agent That Queries Real Content**.

### Core flow

**Source → Opportunity → Requirements → Amendments → Evidence → Qualification → Gaps/Conflicts → Human Decision**

Structured source content remains authoritative. The AI agent interprets and explains that content; it does not silently replace missing facts or make the final business decision.

## Planned content model

- Organization
- Opportunity
- Requirement
- Amendment
- Evidence Source
- Qualification Assessment

## Design principles

1. Evidence before conclusions.
2. Preserve amendments and conflicts instead of overwriting history.
3. Distinguish verified facts from missing information and AI interpretation.
4. Keep the final pursuit/qualification decision with the human.
5. Keep this competition project independent from production MDS systems and data.

## Status

**SANITY-PF-01 — Repository + Sanity Foundation: In progress**
