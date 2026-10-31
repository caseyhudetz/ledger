# The East Lakeview Ledger

A tongue-in-cheek, Onion-style satirical paper about East Lake View and the 44th Ward in Chicago.
One printed vertical front page per month, shared around the neighborhood. Site: eastlakeviewledger.com.

## Where things live
- `ideas/inbox.md`: raw rambles, verbatim
- `ideas/backlog.md`: every headline idea, imported plus refined
- `ideas/published.md`: what has already run (never repeat)
- `issues/YYYY-MM/`: notes, pitches, draft, visuals and final for each issue

## Everyday mode
When Casey shares ideas, use the `idea-intake` skill.

## Issue mode
1. Casey adds real happenings to `issues/YYYY-MM/notes.md`
2. `headline-writer` agent pitches into `pitches.md`
3. Casey picks 5; `visual-ideas` skill writes `visuals.md`
4. Draft articles in `draft.md` with the `ledger-voice` skill
5. `libel-checker` agent reviews before print
6. Final copy goes in `final.md`; add headlines to `ideas/published.md`

## Rules for every agent
- Load `ledger-voice` before writing any copy
- Never invent quotes from real, named people
- No em dashes. No Oxford comma.
- Commit after each step
