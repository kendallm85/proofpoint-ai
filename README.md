# ProofPoint AI

**Evidence before decisions.**

ProofPoint is an open-source AI agent prototype for analyzing business opportunities using structured content, evidence, requirements, amendments, and qualification data.

## Sanity Challenge 2026

This repository is being developed for the Sanity Challenge — Path One: **Ship an Agent That Queries Real Content**.

### Core idea

ProofPoint helps a user move from:

**Source → Opportunity → Requirements → Amendments → Evidence → Qualification → Gaps/Conflicts → Human Decision**

The system is designed so that structured source content remains authoritative. The AI agent interprets and explains that content; it does not silently replace missing facts or make the final business decision.

## Project status

**SANITY-PF-01 — Repository + Sanity Foundation: In progress**

Initial implementation will establish the application foundation, Sanity content model, synthetic procurement scenario, agent boundary, and evidence-first qualification workflow.

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
5. Keep the competition project independent from production MDS systems and data.

## License

MIT
