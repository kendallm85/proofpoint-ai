# ProofPoint Architecture

## Evidence-first flow

1. Source — an external or synthetic source establishes a fact.
2. Opportunity — the source is represented as a structured business opportunity.
3. Requirements — eligibility, submission, insurance, experience, deadline, and other requirements are represented independently.
4. Amendments — changes remain linked to the original opportunity and requirement.
5. Evidence — important claims point back to a source.
6. Qualification — opportunity requirements are compared with known organization evidence.
7. Gaps/conflicts — missing evidence and conflicting versions are surfaced explicitly.
8. Human decision — ProofPoint presents the decision context; the user decides whether to pursue.

## Boundary

The LLM is an interpretation layer, not the system of record. Sanity is intended to provide the structured content and relationships that the agent queries.

## Competition MVP

The first demonstration will use a synthetic procurement opportunity with an original solicitation and at least one amendment that changes a material requirement. This tests structured retrieval, amendment awareness, evidence grounding, and uncertainty handling.
