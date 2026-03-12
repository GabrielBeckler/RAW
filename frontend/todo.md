# RAW Marketing - Landing Page Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **Vercel.com**: Dark mode, clean grid layouts, modern tech aesthetic
- **Linear.app**: Minimalist dark UI, neon accents, smooth animations
- **Style**: Dark Mode + Neon Accents + Modern Agency

### Color Palette
- Primary Background: #0A0A0A (Deep Black)
- Secondary Background: #111111 (Dark Gray - cards/sections)
- Tertiary Background: #1A1A1A (Charcoal - hover states)
- Accent Primary: #00FF88 (Neon Green - CTAs and highlights)
- Accent Secondary: #00CC6A (Darker Green - hover states)
- Text Primary: #FFFFFF (White)
- Text Secondary: #888888 (Gray - secondary text)
- Border: #222222 (Subtle borders)
- Gradient: linear-gradient from #00FF88 to #00CC6A

### Typography
- Font Family: Inter (clean, modern sans-serif)
- Heading1: Inter font-weight 800 (64px) - Hero headline
- Heading2: Inter font-weight 700 (48px) - Section titles
- Heading3: Inter font-weight 600 (24px) - Card titles
- Body: Inter font-weight 400 (16px) - Paragraphs
- Small: Inter font-weight 400 (14px) - Captions
- CTA Buttons: Inter font-weight 600 (16px)

### Key Component Styles
- **Primary Button**: Green background (#00FF88), black text, 8px rounded, hover: scale 1.05
- **Secondary Button**: Transparent with white border, white text, 8px rounded, hover: white bg + black text
- **Cards**: Dark bg (#111111), 1px border (#222222), 12px rounded, hover: border-green glow
- **Section Spacing**: 120px vertical padding desktop, 80px mobile
- **Grid**: 12 columns, max-width 1280px centered

### Images to Generate
1. **hero-phone-mockup.jpg** - Dark smartphone mockup showing Instagram feed with green neon glow effects, modern dark background with grid pattern (Style: 3d, dark mood)
2. **about-agency-team.jpg** - Modern creative agency workspace, dark moody lighting, team collaboration, screens showing social media analytics (Style: photorealistic, dark mood)
3. **portfolio-project-1.jpg** - Social media campaign mockup for a fashion brand, dark aesthetic with neon green accents (Style: photorealistic, modern)
4. **portfolio-project-2.jpg** - Digital marketing dashboard with analytics graphs, dark theme with green highlights (Style: photorealistic, tech)
5. **portfolio-project-3.jpg** - Instagram feed design mockup for a restaurant brand, dark background (Style: photorealistic, modern)
6. **portfolio-project-4.jpg** - E-commerce website design on laptop screen, dark modern aesthetic with green accents (Style: photorealistic, tech)

---

## Development Tasks

### Files to Create:
1. **src/pages/Index.tsx** - Main landing page composing all sections
2. **src/components/HeroSection.tsx** - Hero with headline, CTA buttons, background grid
3. **src/components/SocialProof.tsx** - Client logos grid
4. **src/components/AboutSection.tsx** - About the agency
5. **src/components/ServicesSection.tsx** - 5 service cards with icons
6. **src/components/ResultsSection.tsx** - Stats numbers + Portfolio grid + Process timeline
7. **src/components/TestimonialsSection.tsx** - Client testimonials + CTA + FAQ
8. **src/components/Footer.tsx** - Footer with links, social, contact

### Implementation Notes:
- All sections in single-page scroll layout
- Smooth scroll navigation
- Dark mode throughout
- Green neon accent color (#00FF88)
- Responsive: desktop + mobile
- Animations on scroll (intersection observer)
- FAQ with accordion (shadcn Accordion component)