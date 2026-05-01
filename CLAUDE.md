# Portfolio Project Guidelines

This is Koen Laenens' personal portfolio website built with Next.js. The portfolio showcases design systems work, case studies, and professional expertise.

## Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Geist Sans, Geist Mono

## Project Structure
```
/app
  /page.tsx          # Main portfolio homepage
  /layout.tsx        # Root layout with fonts and metadata
  /globals.css       # Global styles and CSS variables
  /linter/page.tsx   # Figma Linter case study page
/public
  /screenshots/      # Project screenshots and images
```

## Design Principles

### Dark-First Design
- Primary background: Pure black (`#0a0a0a`)
- High contrast text and visuals
- Accent colors: Yellow (`#FFD640`), Red (`#FF3928`), Purple, Cream

### Typography
- Display text: Responsive clamp sizing for fluid scaling
- Tight letter-spacing on headings (`-0.03em` to `-0.04em`)
- Line heights: Compressed on display (0.95-1.1), relaxed on body (1.4-1.6)

### Interaction Design
**IMPORTANT:** Only interactive elements should have interactive states.

❌ **Don't:**
- Add `hover:` states to informational displays
- Use `cursor-pointer` on non-clickable elements
- Add `onMouseEnter`/`onMouseLeave` to static content
- Make elements look clickable when they're not

✅ **Do:**
- Reserve hover states for links, buttons, and clickable images
- Use `cursor-default` or no cursor style for informational cards
- Keep static content visually static
- If something has a hover state, it should do something on click

**Example:**
```tsx
// ❌ Bad - Looks interactive but does nothing
<div className="cursor-pointer hover:border-accent-red" onMouseEnter={...}>
  <p>Business metric: 100%</p>
</div>

// ✅ Good - No false affordances
<div className="border border-gray-800">
  <p>Business metric: 100%</p>
</div>

// ✅ Good - Actually interactive
<button className="cursor-pointer hover:border-accent-red" onClick={...}>
  <p>View details</p>
</button>
```

## WCAG AA Accessibility Requirements

**CRITICAL:** All text and interactive elements MUST meet WCAG AA contrast standards. This is non-negotiable for production.

### Contrast Ratios Required
- **Normal text (< 18pt):** Minimum 4.5:1 contrast ratio
- **Large text (≥ 18pt or ≥ 14pt bold):** Minimum 3:1 contrast ratio
- **Interactive elements:** Minimum 3:1 contrast ratio for borders/focus states

### Approved Color Combinations

#### Text on Black Backgrounds (`#000000` or `#0a0a0a`)
✅ **Use these:**
- `text-white` or `#ffffff` → 21:1 contrast (excellent)
- `text-gray-300` or `#b3b3b3` → 7.35:1 contrast (excellent for all text)
- `text-gray-400` or `#999999` → 5.77:1 contrast (good for normal text)

❌ **Never use these:**
- `text-gray-500` or `#737373` → 4.67:1 contrast (minimal, use sparingly)
- `text-gray-600` or darker → Below 4.5:1 (WCAG AA fail)
- `text-white/70` or lower opacity → Below 4.5:1 (WCAG AA fail)
- `text-white/80` → Acceptable for large text only

#### Text on Accent Red Background (`#FF3928`)
✅ **Use these:**
- `text-black` or `#000000` → Best contrast for small text
- `text-white` or `#ffffff` → Acceptable for large headings (18pt+)

❌ **Never use these:**
- Small text (`text-xs`, `text-sm`) in white on red → Fails WCAG AA
- Any gray values on red → Insufficient contrast

#### Text on Accent Yellow Background (`#FFD640`)
✅ **Use these:**
- `text-black` or `#000000` → Excellent contrast

❌ **Never use these:**
- `text-white` → Insufficient contrast
- Any light gray values → Insufficient contrast

### Accessibility Checklist

When adding or modifying UI components, verify:

1. **Text Contrast**
   - [ ] All normal text has minimum 4.5:1 contrast
   - [ ] All large text has minimum 3:1 contrast
   - [ ] No `text-gray-500` or darker on black backgrounds
   - [ ] No white/light text on bright accent colors (except large headings)

2. **Interactive Elements**
   - [ ] Focus states are visible with 3:1 contrast
   - [ ] Hover states don't reduce contrast below minimums
   - [ ] Buttons have sufficient text contrast

3. **Images & Media**
   - [ ] All images have descriptive alt text
   - [ ] Decorative images use empty alt (`alt=""`)
   - [ ] Important text is not embedded in images

4. **Keyboard Navigation**
   - [ ] All interactive elements are keyboard accessible
   - [ ] Focus order is logical
   - [ ] Modal/lightbox components support ESC to close

5. **Semantic HTML**
   - [ ] Headings are in logical order (h1 → h2 → h3)
   - [ ] Links have descriptive text (no "click here")
   - [ ] Forms have proper labels

### Testing Tools

Use these to verify compliance:
- **Browser DevTools:** Chrome/Firefox Accessibility Inspector
- **Online:** WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)
- **Lighthouse:** Run accessibility audit in Chrome DevTools

### Auto-Fix Common Issues

If you encounter low contrast text:

```tsx
// ❌ Bad - Fails WCAG AA
<p className="text-gray-500">Subtle text</p>
<span className="text-white/60">Faded text</span>

// ✅ Good - Passes WCAG AA
<p className="text-gray-300">Subtle text</p>
<span className="text-white/80">Faded text (large only)</span>

// ❌ Bad - Small text on red
<div className="bg-accent-red">
  <span className="text-white text-xs">Label</span>
</div>

// ✅ Good - Black text on red
<div className="bg-accent-red">
  <span className="text-black text-xs">Label</span>
</div>
```

## Development Workflow

### Running Locally
```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build
npm run start        # Start production server
```

### Adding New Case Studies

1. Create new directory in `/app` (e.g., `/app/health-dashboard`)
2. Add `page.tsx` following the linter case study structure
3. Place screenshots in `/public/screenshots/`
4. Update homepage to link to new case study
5. Verify all text meets WCAG AA contrast requirements

### Style Guidelines

- **Use design tokens from globals.css** - Don't hardcode colors
- **Prefer Tailwind classes** - Keep inline styles minimal
- **Responsive by default** - Use `clamp()` for fluid typography
- **Dark theme first** - Light backgrounds are accent only

## Content Guidelines

### Case Studies
- **Lead with business impact** - Metrics, outcomes, strategic value
- **Focus on differentiators** - What makes this unique/valuable
- **Show, don't tell** - Use screenshots and real examples
- **Keep it scannable** - Short paragraphs, clear headings

### Tone
- Direct and confident, not humble-bragging
- Focus on outcomes over process
- Technical but accessible
- No marketing fluff or buzzwords

## Performance

- Images are optimized via Next.js Image component
- All screenshots use `fill` with `object-contain` for proper sizing
- Lazy loading enabled by default
- Use `priority` only for above-fold images

## Known Patterns

### Lightbox for Screenshots
All case study screenshots should be clickable and open in a lightbox:
- Click anywhere to close
- ESC key support
- Dark semi-transparent overlay
- Uses `object-contain` to preserve aspect ratio

### Interactive Hover States
Project cards use custom cursor-follow tooltips for "View Project" CTAs.

### Sticky Section Cards
Project cards on homepage use `sticky` positioning with staggered `top` values for a cascading scroll effect.

---

**When in doubt:** Prioritize accessibility and simplicity over complexity.
