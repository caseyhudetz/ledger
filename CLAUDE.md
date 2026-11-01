# The East Lakeview Ledger

A tongue-in-cheek, Onion-style satirical paper about East Lake View and the 44th Ward in Chicago.
One printed vertical front page per month, shared around the neighborhood. Site: eastlakeviewledger.com.

## Where things live
- `ideas/inbox.md`: raw rambles, verbatim
- `ideas/backlog.md`: every headline idea, imported plus refined
- `ideas/published.md`: what has already run (never repeat)
- `ideas/favorites.md`: Casey's hand-picked ideas; pitch from these first
- `desk/`: Casey's own writing. Never rewrite it; suggest in chat or a separate notes file
- `issues/YYYY-MM/`: notes, pitches, draft, visuals and final for each issue

## Everyday mode
When Casey shares ideas, use the `idea-intake` skill.

## Issue mode
1. Casey adds real happenings to `issues/YYYY-MM/notes.md`
2. `headline-writer` agent pitches into `pitches.md`
3. Casey picks 5; `visual-ideas` skill writes `visuals.md`
4. Draft articles in `draft.md` with the `ledger-voice` skill
5. `libel-checker` agent reviews before print
6. Final copy goes in `final.md`
7. When Casey approves, the `publish-issue` skill adds it to the live site in `site/`

## The website
`site/` is eastlakeviewledger.com. Pushing to `main` deploys it through Cloudflare Pages. Only change `site/` when publishing an approved issue.

## Rules for every agent
- Casey's words are his. Edit only files Claude wrote; for Casey's writing, suggest, don't replace
- Load `ledger-voice` before writing any copy
- Never invent quotes from real, named people
- No em dashes. No Oxford comma.
- Commit after each step
