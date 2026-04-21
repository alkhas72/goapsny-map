# Technical Specification: GoApsny Informational Landing Page

## Overview
This document outlines the technical and design requirements for the new informational landing page for the **GoApsny** project. The landing page serves as the entry point for users, partners, and volunteers, providing context about the accessibility mapping initiative in Abkhazia.

## Goals
1. Introduce GoApsny and its mission.
2. Provide clear instructions on how to contribute (mapping places).
3. Showcase partners and community supporters.
4. Foster a professional and trustworthy image of the project.

## Design Guidelines
- **Primary Color**: `#D32F2F` (Professional Red).
- **Secondary Colors**: White, Light Gray (`#F5F5F5`), Dark Navy/Slate for text (`#1A1A1A`).
- **Typography**: Modern sans-serif stack (e.g., Inter, Roboto, or Outift).
- **Imagery**: High-quality photos of Abkhazia, people using the map, and accessibility symbols.
- **Aesthetics**: Clean, "premium" feel, minimal clutter, subtle micro-animations (hover effects).

## Page Structure (Sections)
1. **Hero Section**: 
   - Catchy headline (e.g., "Сделаем Абхазию доступнее вместе").
   - Brief sub-headline.
   - Primary Call to Action (CTA): "Перейти к карте" (links to the main app).
   - Secondary CTA: "Как это работает".
2. **Mission/About**:
   - Explanation of the project's importance for people with limited mobility.
3. **How to Map (Tutorial)**:
   - Simple 3-4 step visual guide (Find place -> Check accessibility -> Mark on map).
4. **Impact/Statistics**:
   - Number of places marked, active volunteers (can be placeholders initially).
5. **Partners & Sponsors**:
   - Logos of supporting organizations.
6. **Footer**:
   - Links to social media, contact email, and legal info.

## Technical Implementation
- **Tool**: Initial design and build in [Lovable](https://lovable.dev) for rapid prototyping and high-fidelity UI.
- **Integration**: 
  - The page will be exported/integrated into the existing Next.js codebase as a static or server-rendered page (e.g., `/about` or `/`).
  - Standardized CSS variables to match the `whitelabel.ts` configuration.
- **SEO**:
  - Semantic HTML5.
  - Meta tags for Russian and English search engines.
  - Fast load times (optimized images).

## Next Steps
1. Draft detailed copy for each section in Russian.
2. Design mockup in Lovable using the specified brand colors.
3. Review mockup with the team.
4. Export and integrate into the Next.js frontend.
