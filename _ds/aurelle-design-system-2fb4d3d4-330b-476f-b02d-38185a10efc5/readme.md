# Aurelle — Design System

> *"Luxury is not designed. It is orchestrated."*

The living, buildable expression of the Aurelle Brand Bible (v1.0). This project turns the brand's Visual Identity chapters into real tokens, components, and full-screen recreations that designers, developers, and AI agents can build from without guessing.

---

## 1. What Aurelle is

**Aurelle is a Luxury Beauty House** — founded by **Mansi**, based in **Delhi NCR**. Never a "makeup studio," "salon," "parlour," or "bridal company"; those phrases cap perceived value and limit expansion. Makeup is the *medium*; **confidence is the product** — presence, trust, reassurance, calmness, celebration, memory.

The owned position is **"Confidence through timeless beauty"**; the essence is **"Quiet Confidence."** Aurelle is not competing inside an existing category — it is *defining a fifth one*: the experience-first luxury beauty house, which barely exists in India today.

The governing philosophy is **The Art of Becoming**: beauty should never replace identity, it should reveal it. The Mirror Moment optimises for *recognition* ("this is exactly how I hoped to feel"), never *surprise* ("I don't even look like myself"). Every decision is tested against a thirty-year horizon — **timelessness overrides trends**.

### The products represented here

The Markdown repository **is** Aurelle; every asset is generated from it. The primary digital surface — and the one this system recreates as a UI kit — is the **Website**: the digital flagship studio, an editorial publication rather than a brochure. Its canonical IA (no more than these items):

> Home · About · Meet Mansi · Bridal Experiences · Occasion Beauty · Portfolio · Journal · Testimonials · FAQs · Contact

Booking never exceeds **three steps**. Other surfaces the identity governs (packaging, social, studio collateral, email, presentations) inherit the same tokens.

---

## 2. Sources

This system was built **entirely from written brand documents** — there is no codebase or Figma file. The source documents (copied into `source/` for reference) are:

- `source/MASTER_CONTEXT.md` — complete synthesis of the Aurelle Brand Bible v1.0 (every chapter, canonical decisions).
- `source/DESIGN_SYSTEM.md` — the systems-layer token specification (colour, type, spacing, components). **Authoritative on values.**
- `source/LAUNCH_AND_OPERATIONS_CHECKLIST.md` — phased launch roadmap, customer-experience standards, studio SOPs.
- `source/MARKET_RESEARCH_BRIEF.md` — external 2025–2026 market/pricing benchmarks (Indian wedding economy, Delhi NCR pricing bands). Draft research input, **not canon**.
- `uploads/aurelle-design-system.html` — the original single-file rendered reference these tokens were verified against.

Where this system and a source chapter disagree, **the chapter wins**. The Visual Identity chapters are authoritative on philosophy; `DESIGN_SYSTEM.md` is authoritative on exact values.

---

## 3. The brand formula

Every composition should feel **40% Editorial · 30% Hospitality · 20% Architecture · 10% Beauty**. Lead with editorial layout and generous space; let warmth carry the tone; let structure feel architectural; let beauty appear as the smallest, final accent — never the loudest element. If an accent dominates, the layout has failed the formula.

Five non-negotiable design principles underpin everything: **Less but better · Precision · Material honesty · Calmness · Consistency.**

---

## 4. CONTENT FUNDAMENTALS — how Aurelle writes

**Core stance: Aurelle communicates to *reassure*, not to sell.** Selling is the outcome; trust is the objective. Every sentence should reduce uncertainty, never increase excitement. Luxury never shouts.

**Voice pillars (five):** Calm · Intelligent · Warm · Refined · Honest.

**Writing formula:** Empathy → Clarity → Confidence → Action. Never reversed; never begin with the call to action.

**Copywriting hierarchy:** Belief → Emotion → Experience → Services → Booking. **Never begin with pricing.**

**Person & address.** Warm second person ("you," "your wedding day") and a quiet, collective first person ("we have already thought about this for you"). The brand speaks *with* the client, calmly, as a trusted host — not at a customer.

**Casing.** Sentence case everywhere. The *only* uppercase element is the eyebrow label, always letter-spaced at 0.18em — it labels, it never shouts. Headlines are sentence case in the display serif.

**Emoji: never.** No emoji, ever. No exclamatory punctuation, no urgency markers, no "🔥/✨" energy. Restraint is the tone.

**Tone & vibe.** Editorial, unhurried, intelligent, hospitable. Reads like luxury publishing and fine-hotel correspondence, not beauty advertising. Spelling leans British/Indian-English ("colour," "personalise," "centred," "jewellery").

**The consultation rephrase** captures the whole voice: instead of *"What look do you want?"* Aurelle asks **"How would you like to feel on your wedding day?"**

**Button & label copy** says exactly what happens, in the brand voice:
- ✓ "Book a consultation," "View the portfolio," "Read the journal," "Begin your enquiry"
- ✗ "Submit," "Click here," "Buy now," "Sign up"

**Error & system messages** stay calm and explain what to fix, in voice, in Bronze — never red-alarm styling. e.g. *"Please share a name so we can prepare for you."*

**Approved vocabulary:** presence, craftsmanship, curated, bespoke, hospitality, editorial, timeless, becoming, calm, grace, refinement, belonging.

**Forbidden words (hard ban):** glamorous, bold, sexy, dramatic, diva, slay, glam queen, perfect, flawless, transformation, "best in India," "limited offer," "100% guaranteed." Service tiers are **never** named Gold / Silver / Diamond / Premium — every experience is individually, evocatively named.

**Reading test:** read it aloud. Does it sound calm, respectful, and still elegant in ten years? If not, rewrite.

---

## 5. VISUAL FOUNDATIONS

The aim: someone should recognise Aurelle *before* reading its name. The whole language is warm-neutral, architectural, editorial, and quiet.

**Colour.** Warm-neutral and earthbound; every value sits between extremes — no pure black, no pure white, no saturation. Backgrounds draw from **Ivory (`#F4EFE6`) / Bone (`#FAF7F0`) / Linen (`#EAE3D6`) only**. Body text is **Espresso (`#3A322A`)** on light, never pure black. Espresso or Charcoal full-bleed backgrounds are reserved for rare editorial moments. Accents (**Champagne / Bronze / Olive**) cover **≤10%** of any composition. Forbidden: bright pink/purple/blue, neon, pure `#000`/`#FFF`, anything highly saturated.

**Typography.** Two families. **Cormorant Garamond** (high-contrast serif) carries display at light/regular weight (300–400) — it *never* appears bold; weight comes from size and space. **Inter** carries body, UI, captions, and data. Never set the display serif below 1.5rem; below that, use Inter. Eyebrows are the only uppercase, always 0.18em-tracked. Body line length 60–75 characters.

**Spacing & layout.** Single 8px base unit (8 → 128px scale). Section vertical rhythm is generous — `--space-7` to `--space-8` between major sections. Max content width 1200px; reading column 680px. 12-column grid, `--space-3` gutter, generous outer margins. **Left-aligned text by default**; centred reserved for hero or single-statement moments. Editorial pacing — large images, one idea per section, slow vertical flow. Never dense.

**Backgrounds.** Flat warm-neutral surfaces — *no gradients*, no patterns, no textures-as-decoration. Depth is created by stepping between Ivory / Bone / Linen and by space, not by effects. Imagery is editorial and full-bleed where it leads a section, framed in the neutral palette otherwise.

**Imagery vibe.** Natural light, observed not staged, emotion before beauty, generous negative space. **Warm** neutral tone throughout — never cool, never high-saturation, no heavy retouching, no overexposed glamour, no artificial poses. Photographs should "feel like they belong in the same room as the type." Materials referenced: travertine, limestone, oak, walnut, brushed brass, linen, cotton paper, ceramic.

**Real photography library.** `assets/photography/` holds **42 real Aurelle bridal photographs** for website, deck, and collateral use (see the "Bridal photography library" card under Imagery, and `assets/photography/README.md`). These are **low-key, jewel-tone** bridal portraits — deep near-black grounds, red and emerald tones, gold bokeh, with generous black negative space. Because they are dramatic rather than soft-daylight, use them in the brand's *rare editorial* register: full-bleed on Espresso/Charcoal grounds with Cormorant display type set into the dark space — not on the default Ivory/Bone layouts. **Two caveats:** every file carries a third-party photographer watermark (request clean masters before production), and the mood leans more dramatic than the stated daylight direction above — use intentionally.

**Corner radii.** `0`–`2px` only. Default `--radius: 2px`. Luxury is architectural, not rounded — no pill shapes, no large radii.

**Borders & lines.** Hairline dividers in **Stone (`#D8CFC0`), 1px** — used to structure, never to decorate.

**Cards / surfaces.** Bone surface on Ivory ground, optional 1px Stone border, 2px radius, `--space-4`–`--space-5` padding. **No shadow** — separation is by surface colour and space. Image-led where possible.

**Elevation / shadow.** Avoid drop shadows. If a floating element is truly unavoidable, keep it barely perceptible: `0 1px 3px rgba(42,39,36,0.06)`. No layered, coloured, or glow shadows.

**Transparency & blur.** Used sparingly and only with purpose — e.g. a quiet scrim over a full-bleed image so type stays legible. No frosted-glass spectacle, no decorative blur.

**Motion.** Calm and slow — it should reduce heart rate. Entrances 400–600ms; hovers 200ms. Easing `cubic-bezier(0.22, 1, 0.36, 1)` (gentle ease-out). Behaviour: fade with a slight rise on scroll reveal. **No bounce, no fast transitions, no parallax spectacle, no infinite loops.** Always respect `prefers-reduced-motion`.

**Hover states.** Quiet shifts: primary button moves Espresso → Bronze; secondary fills with Linen; text links gain a Bronze 1px underline. Surfaces may rise a few px gently. No scale-up pop, no colour flashing.

**Press states.** A subtle settle, never a hard shrink or colour flash — the interaction stays calm.

**Focus.** Visible, calm Champagne ring (`outline: 2px solid var(--champagne); offset 1px`) — accessible without alarm.

**Layout fixtures.** Minimal horizontal nav — wordmark left, links right, sentence case, generous tracking. Nav may quietly become opaque on scroll. No sticky banners, no pop-ups, no urgency bars.

**The design test.** Before anything ships: does it feel timeless? calm? intentional? Does it hold the 40/30/20/10 formula? Could it exist twenty years from now? If any answer is no, it does not belong inside Aurelle.

---

## 6. ICONOGRAPHY

Aurelle's identity is deliberately **architectural and abstract** — the logo forbids brushes, lips, crowns, diamonds, faces, and flowers. Iconography follows the same restraint: **icons are used sparingly and never decoratively.** There is no proprietary icon font or SVG sprite in the source material — this is an editorial, type-and-space brand, not an icon-led one.

**Approach in this system:** where a quiet functional icon is genuinely needed (nav, form affordances, directional cues), use **thin hairline line icons** — single stroke (~1.5px), no fill, rounded or square caps, matched to the Espresso/Taupe palette and sized to the type. They should read like fine engraving, not UI chrome.

**Substitution (flagged):** because the brand ships no icon set, this system uses **[Lucide](https://lucide.dev)** (loaded from CDN) as the closest match — minimal, consistent ~1.5px stroke, no fill, geometric-but-humane. Used at small sizes in Taupe/Espresso it sits quietly within the language. **This is a substitution, not a brand-owned set** — see CAVEATS. If Aurelle later commissions a bespoke icon set it should replace Lucide wholesale.

**Emoji & unicode:** **never** used as icons (or anywhere). The occasional typographic mark (a hairline arrow "→", a middot "·" as a separator) is the one sanctioned "icon-as-glyph."

**Logo / wordmark.** The brand has no supplied logo binary. This system renders the **wordmark "AURELLE"** typographically in Cormorant Garamond with wide tracking, plus the secondary signature **"Founded by Mansi"** and the monogram **"A"** — all as live type/HTML in `assets/`, not drawn artwork. Safe zone = height of the cap "A"; minimum 120px digital / 25mm print. See `assets/` and the Brand cards.

---

## 7. Index / manifest

**Root**
- `styles.css` — the one stylesheet consumers link (import index only).
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible entry point.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `shape-motion.css` (all `@import`ed by `styles.css`).

**`source/`** — the four brand documents above, copied verbatim for reference.

**`assets/`** — logo wordmark / signature / monogram specimens (typographic), and `photography/` (42 real Aurelle bridal photographs + gallery card, shown under the Imagery group).

**`guidelines/`** — foundation specimen cards (Type, Colours, Spacing, Brand) shown in the Design System tab.

**`components/`** — reusable React primitives (Button, IconButton, TextLink, Input, Textarea, Select, Checkbox, Eyebrow, Card, Badge, Divider, Nav). Each has a `.jsx`, `.d.ts`, `.prompt.md`, and a directory card.

**`ui_kits/website/`** — high-fidelity click-through recreation of the Aurelle website (Home, Bridal Experiences, Portfolio, Contact / three-step booking).

See the Design System tab for every registered specimen and component card.

---

**`SKILL.md`** (root) — Agent-Skills-compatible entry point for using this system in Claude Code.

> Status: foundations, tokens, all 13 components, and 20 specimen/component cards are complete. The `ui_kits/website/` recreation (Home, Bridal Experiences, Portfolio, Contact) is the remaining build.

*The Aurelle Brand Bible v1.0 is the only canon. This system expresses it; it does not extend it.*
