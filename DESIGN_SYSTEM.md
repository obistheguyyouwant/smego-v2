# SMEGO V2 Design System Documentation

## Overview
This document describes the current design system and component structure. **The HTML structure and JavaScript logic are immutable.** Only CSS (colors, typography, spacing, component styling) can be changed to pivot the design direction.

---

## 1. COLOR TOKENS

### Current Palette
All colors are defined as CSS variables. To change the design direction, propose new hex values for these tokens:

```css
/* Primary Brand Color */
--color-primary: #FCD34D (Bright Yellow)

/* Neutral Colors */
--color-black: #1F2937 (Dark Gray-Black)
--color-white: #FFFFFF (White)
--color-gray-50: #F9FAFB
--color-gray-100: #F3F4F6 (Light gray, used for hero background)
--color-gray-200: #E5E7EB
--color-gray-300: #D1D5DB
--color-gray-400: #9CA3AF
--color-gray-500: #6B7280 (Secondary text)
--color-gray-600: #4B5563
--color-gray-700: #374151

/* Semantic Colors (map to primary/neutral) */
--color-bg-primary: #FFFFFF (Page background)
--color-bg-secondary: #F3F4F6 (Card backgrounds, hover states)
--color-bg-hero: #F3F4F6 (Hero section background)
--color-text-primary: #1F2937 (Main text)
--color-text-secondary: #6B7280 (Muted text, captions)
--color-text-inverse: #FFFFFF (Text on dark backgrounds)
--color-border: #E5E7EB (Card borders)
--color-button-primary: #1F2937 (Black button background)
--color-button-primary-hover: #374151 (Black button on hover)
--color-button-primary-text: #FFFFFF (Text on black buttons)
```

### How to Propose Changes:
Provide new hex values for each token. For example:
- Change primary from yellow (#FCD34D) to teal (#14B8A6)
- Change button colors from black to a custom brand color
- Adjust gray scale for different contrast levels

---

## 2. TYPOGRAPHY SYSTEM

### Current Fonts
```css
/* Display/Headlines - Bold, Geometric, Modern */
font-family: "Space Grotesk", sans-serif
weights: 500 (medium), 600 (semibold), 700 (bold)

/* Body/UI - Clean, Thai + Latin Support */
font-family: "Anuphan", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
```

### Type Scale (Immutable structure, values changeable)
```css
--text-xs: 0.75rem (12px)
--text-sm: 0.875rem (14px)
--text-base: 1rem (16px)
--text-lg: 1.125rem (18px)
--text-xl: 1.25rem (20px)
--text-2xl: 1.5rem (24px)
--text-3xl: 1.875rem (30px)
--text-4xl: 2.25rem (36px)
--text-5xl: 3rem (48px)
```

### Headings
```css
h1 { font-size: var(--text-5xl); font-weight: 700; line-height: 1.1; }
h2 { font-size: var(--text-4xl); font-weight: 700; line-height: 1.2; }
h3 { font-size: var(--text-3xl); font-weight: 700; }
h4 { font-size: var(--text-2xl); font-weight: 700; }
p { line-height: 1.7; font-size: var(--text-base); }
```

### How to Propose Changes:
- Suggest different Google Fonts for display and body (must support Thai)
- Propose new type scale values (e.g., larger headlines, smaller body text)
- Change font weights if desired
- Adjust line-heights for different readability

**Note:** We can easily swap fonts from Google Fonts by only changing the font-family value.

---

## 3. SPACING SYSTEM

### Spacing Scale (Used consistently throughout)
```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
--spacing-3xl: 4rem (64px)
```

### Layout Padding
- Container max-width: 1440px
- Desktop container padding: 1.5rem (24px) on left/right
- Mobile container padding: 1rem (16px) on left/right
- Section vertical padding: 4rem (64px)

### How to Propose Changes:
- Tighter/looser spacing between sections
- Different container max-widths
- Adjusted padding for cards and components
- Different gaps between grid items

---

## 4. BORDER & RADIUS TOKENS

```css
--radius-sm: 0.375rem (6px)    /* Small badges, tags */
--radius-md: 0.5rem (8px)      /* Form inputs, small cards */
--radius-lg: 0.75rem (12px)    /* Cards, images */
--radius-xl: 1rem (16px)       /* Large sections */
--radius-full: 999px           /* Pill buttons, circles */
```

### How to Propose Changes:
- More/less rounded (sharper corners vs. rounder)
- Different radii for different components
- Switch to sharp corners (0px) for minimal aesthetic

---

## 5. SHADOW SYSTEM

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)      /* Subtle */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)    /* Hover states */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)  /* Cards */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)  /* Featured elements */
```

### How to Propose Changes:
- More/less prominent shadows (darker/lighter, more/less blur)
- Remove shadows entirely for flat design
- Increase shadow depth for dramatic effect

---

## 6. COMPONENT STYLING

### Buttons
**Primary Button (Black)**
```css
.btn-primary {
  background: #1F2937 (black)
  color: #FFFFFF (white text)
  padding: 1rem 2rem (medium)
  border-radius: 999px (fully rounded/pill)
  font-weight: 600
  transition: all 0.2s
  hover: background #374151, translateY(-1px), shadow
}
```

**Yellow Button**
```css
.btn-yellow {
  background: #FCD34D (primary yellow)
  color: #1F2937 (black text)
  same padding & radius as primary
}
```

**Secondary Button**
```css
.btn-secondary {
  background: #F3F4F6 (light gray)
  border: 1px solid #E5E7EB (border)
  color: #1F2937 (black text)
}
```

### Cards
**Product Card**
```css
background: #FFFFFF (white)
border: 1px solid #E5E7EB (light border)
border-radius: 0.75rem (rounded corners)
box-shadow: var(--shadow-sm)
hover: box-shadow elevated, border-color changes to primary
```

**Featured Card (Black)**
```css
background: #1F2937 (black)
color: #FFFFFF (white text)
padding: 2rem
border-radius: 0.75rem
```

**Featured Card (Yellow)**
```css
background: #FCD34D (primary yellow)
color: #1F2937 (black text)
padding: 2rem
border-radius: 0.75rem
```

### Forms & Inputs
```css
.newsletter-input {
  padding: 1rem 1.5rem
  border-radius: 999px (fully rounded)
  border: none
  background: #FFFFFF (white)
  font-size: 1rem
}

.filter-tab {
  padding: 0.5rem 1.5rem
  border-radius: 999px
  background: #F3F4F6 (inactive)
  hover: border-color shows
  active: background #FCD34D (yellow)
}
```

### Badges
```css
.product-badge {
  width: 32px
  height: 32px
  border-radius: 999px (circle)
  background: #FCD34D (primary yellow)
  color: #1F2937 (black text)
  font-weight: 700
  position: absolute top-left on product cards
}
```

---

## 7. PAGE SECTIONS

### Current 9-Section Layout (Immutable Structure)

1. **Navbar** - Sticky black background, logo, nav links, icons
   - Height: auto, padding: 1rem 0
   - Background: black
   
2. **Hero Banner** - 2-column grid (left text, right image)
   - Background: light gray
   - Padding: 4rem 0
   - Stacks to 1 column on mobile
   
3. **Featured Products** - 3-column grid
   - 2 black cards, 1 yellow card
   - Stacks to 1 column on mobile
   
4. **Promo Duo** - 2-column grid (side by side)
   - Both yellow background
   - Image floated inside
   - Stacks to 1 column on mobile
   
5. **Category Rail** - Horizontal scrollable row
   - Circular icons with labels below
   - Pagination dots
   
6. **Best Sellers** - Responsive product grid
   - 3-4 columns on desktop
   - 2-3 columns on tablet
   - 2 columns on mobile
   - Filter tabs at top
   
7. **Newsletter Banner** - 2-column layout (image left, form right)
   - Full-width yellow background
   - Stacks to 1 column on mobile
   
8. **News Section** - 3-column card grid
   - Allows secondary colors for editorial imagery
   - Stacks to 1 column on mobile
   
9. **Footer** - 4-column layout
   - Black background
   - Stacks to 1 column on mobile

---

## 8. RESPONSIVE BREAKPOINTS

```css
Desktop (1280px+)    - Full layout, all features visible
Tablet (768px)       - Cards reflow, some elements stack
Mobile (375px)       - Single column, touch-optimized spacing
```

**Immutable Changes:**
- Hero: 2-column → 1 column on mobile
- Featured row: 3-column → 1 column
- Promo duo: 2-column → 1-column
- Best sellers grid: 4-col → 3-col → 2-col
- Newsletter: 2-column → 1 column
- News: 3-column → 1 column
- Footer: 4-column → 1 column

---

## 9. DARK MODE

The design system supports both light and dark themes through CSS media queries:
```css
:root { /* Light theme defaults */ }
@media (prefers-color-scheme: dark) { /* Dark mode tokens */ }
:root[data-theme="dark"] { /* Explicit dark toggle */ }
```

### How to Propose Changes:
- Suggest dark mode color palette
- Adjust contrast for readability in dark mode
- Propose different accent colors for dark backgrounds

---

## 10. DESIGN DIRECTION PROPOSAL TEMPLATE

When proposing a new design direction, please fill in:

### **Color Direction**
- [ ] Primary color: `#______` (new accent color)
- [ ] Secondary color: `#______` (optional)
- [ ] Neutral colors: Keep current grays or propose new palette
- [ ] Button colors: Suggest button background/hover/text colors
- [ ] Semantic colors: Any changes to text, backgrounds, borders?

### **Typography Direction**
- [ ] Display font: `____` (e.g., "Playfair Display", "Poppins", "IBM Plex Sans")
- [ ] Body font: `____` (must support Thai; options: "Anuphan", "Prompt", "Sarabun", "IBM Plex Sans")
- [ ] Type scale: Same or propose new values?
- [ ] Font weights: Any changes?

### **Spacing & Layout**
- [ ] Tighter or looser spacing?
- [ ] Container width: Keep 1440px or adjust?
- [ ] Section padding: Increase/decrease current 4rem?
- [ ] Card gaps: Larger/smaller gaps?

### **Component Style**
- [ ] Buttons: Keep pill-shaped or change (sharp, square, minimal)?
- [ ] Cards: Keep rounded or change (flat, sharp corners)?
- [ ] Shadows: Keep, enhance, or remove?
- [ ] Borders: Visible or subtle/none?

### **Special Features**
- [ ] Animation/hover effects: Keep current or simplify?
- [ ] News section colors: Keep secondary colors allowed or restrict?
- [ ] Dark mode: Support or light-only?

---

## 11. WHAT CANNOT CHANGE (HTML/JS Layer)

❌ **DO NOT MODIFY:**
- Page structure (9 sections must remain)
- Navigation links and icon functionality
- Product cards and pricing logic
- Filter/search functionality
- Responsive breakpoints (stacking behavior)
- Thai/English language content

✅ **CAN MODIFY:**
- All colors and color themes
- All fonts and typography
- All spacing and padding
- All component shapes (radius, borders)
- All shadows and effects
- Component hover/active states
- Accent colors and highlights

---

## 12. CURRENT DESIGN CHARACTERISTICS

**Current Aesthetic:** Premium tech retail (Apple reseller style)
- Bold black/yellow branding
- High contrast, clean, modern
- Pill-shaped buttons and rounded cards
- Generous whitespace
- Professional, upscale feel

**Design Principles:**
- Strong visual hierarchy
- Consistent spacing grid
- Premium typography pairings
- Accessible contrast ratios
- Mobile-first responsiveness

---

## 13. SUBMISSION INSTRUCTIONS

When ready to present new design direction:

1. **Fill out the Design Direction Proposal Template** (Section 10)
2. **Provide a visual mockup** (Figma, Sketch, or screenshot)
3. **List all color hex values** you want to change
4. **Specify fonts** if proposing different typography
5. **Describe the overall aesthetic** (minimal, bold, colorful, dark, etc.)

---

## Questions?

- **CSS Variables:** All style tokens are in `:root` block in `css/styles.css`
- **Component Classes:** All component names are in the CSS (e.g., `.btn-primary`, `.product-card`, `.navbar`)
- **Responsive Design:** Breakpoints are in `@media (max-width: 768px)` and `@media (max-width: 640px)`
- **Theme Support:** Dark mode tokens are in `@media (prefers-color-scheme: dark)` blocks

**Ready to explore new directions? Use this template to guide the design team! 🎨**
