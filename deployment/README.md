# East Lakeview Ledger deployment

The production Worker is `eastlakeviewledger` on Cloudflare.

Cloudflare Workers Builds should connect to `caseyhudetz/ledger` on branch `main`, with root path `/` and deploy command `npx wrangler deploy`.

The root `wrangler.jsonc` serves the static assets under `site/`.

A push to `main` triggers production deployment after the Git integration has been connected. Verify the successful build and the live domain before marking a release complete.
