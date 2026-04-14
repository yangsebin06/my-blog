# Design System Specification

## 1. Overview & Creative North Star: "The Neural Monolith"

This design system is engineered to bridge the gap between academic software engineering and cutting-edge AI-integrated electronics. Moving away from the bright, safe aesthetics of the original light theme, we are pivoting toward **"The Neural Monolith."**

**The Neural Monolith** represents a digital environment that feels solid, high-performance, and infinitely deep. It leverages the contrast between void-like backgrounds and high-frequency light accents (electric blue and cyber green) to mimic the aesthetics of a cleanroom or a high-end IDE. We break the "standard blog" template through **intentional asymmetry**, high-impact typographic scale shifts, and a depth model based on light refraction rather than physical shadows.

---

## 2. Colors & Surface Logic

Our palette is anchored in deep charcoals and blacks, utilizing vibrant accents to signify machine intelligence and "live" circuits.

### The Palette (Material Logic)
*   **Surface:** `#131313` (Deep Charcoal) - The primary canvas.
*   **Primary:** `#B5C4FF` (Electric Blue) - Signals interactivity and core logic.
*   **Secondary:** `#7DFFA2` (Cyber Green) - Reserved for AI, success states, and hardware-linked data.
*   **Tertiary:** `#4CD6FF` - Used for specialized data visualization and tech-heavy details.

### The "No-Line" Rule
To maintain a premium, seamless aesthetic, **1px solid borders are prohibited for sectioning.** 
*   **Method:** Separate sections using background shifts. A `surface-container-low` section should transition directly into a `surface` section. 
*   **The Signature Transition:** Use subtle vertical gradients between surfaces (e.g., `#131313` to `#1C1B1B`) to define areas without hard lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers:
1.  **Level 0 (Base):** `surface` (`#131313`).
2.  **Level 1 (Subtle Inset):** `surface-container-low` (`#1C1B1B`) for large content blocks.
3.  **Level 2 (Active Cards):** `surface-container-highest` (`#353534`) for hover states or critical callouts.

### The "Glass & Gradient" Rule
Floating elements (Modals, Navigation Bars, Hovering Tooltips) must use **Glassmorphism**:
*   **Color:** `surface-container-low` at 70% opacity.
*   **Effect:** `backdrop-blur: 20px`.
*   **Glow:** Apply a 1px `outline-variant` (`#434654`) at 15% opacity to edges catching "simulated" overhead light.

---

## 3. Typography

The typography strategy pairs the technical precision of **Inter** with the industrial, futuristic voice of **Space Grotesk**.

*   **Display (Space Grotesk):** For hero headers and high-impact technical terms. Its wide stance and geometric glyphs evoke an "academic-meets-aerospace" feel.
*   **Body & Labels (Inter):** High-legibility sans-serif for complex technical articles. 
*   **Code Monospace (Roboto Mono):** Specifically for snippets and hardware register values.

**Typographic Hierarchy:**
*   **display-lg (3.5rem):** Reserved for site titles or main hero headlines.
*   **headline-md (1.75rem):** Article headings. Uses a generous `letter-spacing: -0.02em` for an editorial feel.
*   **body-lg (1.0rem):** The workhorse for long-form blog content. `line-height: 1.6` for optimal readability in dark mode.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than traditional structural shadows.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card placed on a `surface-container-low` section creates a natural "in-set" effect without a single pixel of stroke.
*   **Ambient Shadows:** For floating primary cards, use an extra-diffused shadow: `box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4)`. The shadow should feel like a soft weight rather than a hard silhouette.
*   **The "Ghost Border":** If a container requires definition against a similar background, use the `outline-variant` token (`#434654`) at **15% opacity**. It should be felt, not seen.
*   **Signature Tech Glow:** Key action items or active AI states utilize a `primary-container` shadow with a 20px blur and low opacity to simulate a CRT or LED glow.

---

## 5. Components

### Buttons
*   **Primary:** High-contrast `primary` background with `on-primary` text. No border. Subtle 2px corner radius (`sm`).
*   **Secondary:** Ghost style. Transparent background, `primary` label, and a "Ghost Border" at 20% opacity.
*   **Tertiary:** Text-only with a trailing 2px `secondary` (Cyber Green) chevron for "Read More" links.

### Input Fields
*   **Styling:** Filled variant using `surface-container-high`. No bottom line.
*   **Active State:** The field shifts to `surface-bright` with a `primary` glow on the left vertical edge (2px width).

### Cards & Feed Lists
*   **Forbid Divider Lines:** Separate article snippets using `spacing-scale-xl` (Vertical White Space).
*   **Tech-Asymmetry:** Featured cards in a list should have a slightly wider left margin than the standard grid to create an editorial "break."

### Chips & Tags
*   **Selection Chips:** Use `secondary-container` for AI/Tech tags. They should feel like physical hardware labels—small, high-contrast, and rectangular (`sm` roundedness).

---

## 6. Do's and Don'ts

### Do
*   **DO** use `surface-container-lowest` for code blocks to create a "terminal" feel within the article.
*   **DO** use heavy typographic contrast. A massive 3.5rem headline next to 0.75rem metadata creates a signature, high-end look.
*   **DO** use a `secondary` (Cyber Green) dot for "Live" status or hardware connectivity indicators.

### Don't
*   **DON'T** use pure white (`#FFFFFF`) for body text. Use `on-surface` (`#E5E2E1`) to prevent eye strain and "halo" effects in dark mode.
*   **DON'T** use rounded corners above `0.5rem (lg)`. This system relies on sharp, precise, and tech-forward geometry.
*   **DON'T** use 100% opaque borders. They clutter the UI and break the "Neural Monolith" immersion.