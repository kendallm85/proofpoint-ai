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

A deployed Studio schema is required before a Sanity Context MCP endpoint can serve the dataset in GROQ mode.

## Synthetic fixture
`fixtures/procurement-opportunity.json` is synthetic. It models an opportunity where Amendment 1 changes insurance coverage from $1M to $2M and moves the deadline from Oct. 10 to Oct. 15, 2026.

No production/client data belongs in this repository.
