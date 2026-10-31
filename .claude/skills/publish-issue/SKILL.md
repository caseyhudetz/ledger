---
name: publish-issue
description: Publish a finished Ledger issue to eastlakeviewledger.com. Use only when Casey explicitly says an issue is approved and ready to publish.
---

# Publish Issue

The live site is the `site/` folder. Cloudflare Pages deploys it automatically whenever `main` is pushed to GitHub.

## Before publishing
- Casey has said the issue is approved. Never publish on your own initiative.
- The `libel-checker` agent has reviewed `issues/YYYY-MM/final.md`.
- The print files exist: `site/<month>-YYYY.pdf` (the full front page) and `site/<month>-YYYY.png` (the cover image, about 1521 x 2000).

## Steps
1. Read `site/index.html` and copy the structure of the most recent issue section exactly (desktop and `#mobile-<month>` blocks).
2. Add the new issue as the first section, with its headlines, image, captions, body text and "View original newspaper" PDF link.
3. Add the new nav anchors next to the existing ones.
4. Add this issue's headlines to `ideas/published.md`.
5. Show Casey a summary of the changes and wait for a final yes.
6. Commit `publish: <Month> YYYY issue` and push to `main`. The site updates in about a minute.
7. Fetch https://eastlakeviewledger.com/ and confirm the new issue appears.

## Style
No em dashes. No Oxford comma.
