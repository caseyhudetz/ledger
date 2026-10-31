# The East Lakeview Ledger

A tongue-in-cheek, Onion-style satirical paper about East Lake View and the 44th Ward in Chicago.
One printed vertical front page per month, shared around the neighborhood. Site: eastlakeviewledger.com.

## How an issue gets made
1. Casey drops real neighborhood happenings for the month into `issues/YYYY-MM/notes.md`
2. The `headline-writer` agent pitches headlines into `issues/YYYY-MM/pitches.md`
3. Casey picks favorites; unused pitches go to `joke-backlog.md`
4. Drafts are written into `issues/YYYY-MM/draft.md` using the `ledger-voice` skill
5. The `libel-checker` agent reviews the draft before anything is printed
6. Final copy goes in `issues/YYYY-MM/final.md` and gets committed

## Rules for every agent
- Always load the `ledger-voice` skill before writing or editing copy
- Never invent quotes from real, named people
- Never use em dashes. Never use the Oxford comma.
- Commit after each step with a short message like `2026-11: headline pitches`
