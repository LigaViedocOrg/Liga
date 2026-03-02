# Slide Schema (Allowed Types)

Claude must only create slides using these types.

## 1) TITLE
Fields:
- title (3–6 words)
- subtitle (optional, 1 sentence)
- kicker (optional)

## 2) SECTION_DIVIDER
Fields:
- statement (3–8 words)

## 3) AGENDA
Fields:
- title
- items (3–6)

## 4) TWO_COLUMN
Fields:
- title
- bullets (2–5)
- rightPanel (one of: cardGrid | metrics | imagePlaceholder)

## 5) CARD_GRID
Fields:
- title
- cards (3–6), each card: heading + one line

## 6) METRICS
Fields:
- title
- metrics (2–4), each: number + label

## 7) CLOSING
Fields:
- title
- line (one sentence)
