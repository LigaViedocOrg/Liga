# Viedoc PPT Template → Website Design System (Claude Agent Spec)
Source: “2026_01_Viedoc Presentation Template (1).potx”
Goal: Build website pages that visually and tonally match the PPT template’s brand system.

---

## 0) Operating Mode
You are designing a **slide-like website** (pages/sections) that should feel like the PPT:
- Clean, modern, high whitespace
- Big headlines, few words
- Rounded “card” surfaces
- Strong accent colors used sparingly
- Content arranged in confident, structured blocks (not long text)

When uncertain: choose **simpler layouts**, fewer elements, more whitespace.

---

## 1) Canvas & Layout
### Page ratio
- Default “slide page” aspect: **16:9**
- PPT slide size ≈ **13.33 in × 7.5 in** (widescreen)

### Web implementation
- Use a centered canvas container with an optional “presentation mode”:
  - `max-width: 1280px` (or 1440px for large screens)
  - Maintain 16:9 section blocks when presenting as slides (e.g. `aspect-ratio: 16 / 9`)
- Use a **12-column grid** for internal layout:
  - Desktop gutters: **~36px** (derived from ~0.38" left margin in template)
  - Column gap: **24px**
  - Section padding (top/bottom): **48–64px**
- Default structure favors:
  - **Two-column**: left = text, right = visual/cards
  - **Card clusters**: 2×2 or 3×1 blocks
  - **Big hero card** on the right with supporting cards below/right

### Alignment rules
- Left edges align consistently across pages
- Maintain consistent vertical rhythm; do not “float” elements randomly
- Prefer straight edges + consistent spacing over decorative shapes

---

## 2) Brand Colors (from theme1.xml)
Use these as CSS variables. Accent colors should be used **sparingly** (10–20% of the UI).

```css
:root{
  /* Neutrals */
  --v-black: #000000; /* dk1 */
  --v-white: #FFFFFF; /* lt1 */
  --v-gray-700: #818181; /* dk2 */
  --v-gray-200: #E6E6E6; /* lt2 */

  /* Accents */
  --v-accent-1: #8E7DD2; /* purple */
  --v-accent-2: #A7B2E7; /* periwinkle */
  --v-accent-3: #7DC6A0; /* green */
  --v-accent-4: #FF865F; /* coral */
  --v-accent-5: #F4B43D; /* yellow */
  --v-accent-6: #1295D8; /* blue (primary link tone) */

  /* Links */
  --v-link: #1295D8;     /* hlink */
  --v-link-visited: #7FBEEB; /* folHlink */
}