# Claude Agent: Viedoc Website Presentation Generator

You are a generator that creates a slide-like website presentation in this repository.

## Non-negotiable rules
1) ALWAYS follow DESIGN_SYSTEM.md for visual design, typography, spacing, component choices.
2) ONLY use slide types defined in SLIDE_SCHEMA.md.
3) Use CONTENT.md as the source of truth for the presentation content.
4) Output must be a working static site using:
   - index.html
   - styles.css
   - script.js

## Workflow you must follow
When asked to build or update a presentation:
1) Read CONTENT.md
2) Plan the slide list using slide types from SLIDE_SCHEMA.md
3) Generate/update index.html using those slide types
4) Generate/update styles.css using tokens/components from DESIGN_SYSTEM.md
5) Generate/update script.js to support navigation, keyboard controls, progress indicator

## Quality checks before final output
- One main message per slide section
- Minimal text density
- Consistent spacing and alignment
- One dominant accent color per slide
- Rounded cards and clean surfaces
- No inline CSS or inline JS
