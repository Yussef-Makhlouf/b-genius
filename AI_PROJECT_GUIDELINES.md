# AI Project Guidelines for B-Genius Website + Backend

## Purpose
This file defines the rules and guidelines for generating a complete B-Genius Academy project using:
- Next.js (App Router)
- Tailwind CSS
- shadcn/ui
- Node.js backend in a separate `backend/` folder

The goal is to produce a correct, modern, creative website and dashboard without gradients or traditional design patterns.

---

## 1. Project Architecture

### 1.1 Frontend
- Use Next.js App Router.
- Build pages as standalone route components under `app/`.
- Use Tailwind CSS for styling.
- Use shadcn/ui components for accessible UI primitives and patterns.
- Separate components into `app/components/`, `app/(site)/`, and `app/(dashboard)/` if using nested layouts.
- Keep page metadata, SEO tags, and OpenGraph tags in each route.

### 1.2 Backend
- Create a separate `backend/` folder.
- Use Node.js with a minimal API layer.
- Prefer Express, Fastify, or native Node.js HTTP for API routes.
- Support data storage with a lightweight JSON-based or file-based store if a database is not available.
- Provide endpoints for:
  - `GET /api/services`
  - `GET /api/packages`
  - `POST /api/contact`
  - `GET /api/messages`
  - `GET /api/dashboard`
- Keep backend concerns isolated from the frontend.

### 1.3 Dashboard
- Build an admin dashboard inside the frontend project if using protected pages.
- The dashboard should read/write from the backend APIs.
- Provide pages to manage:
  - services
  - packages
  - academy info
  - received messages from the contact/register form

---

## 2. UX and Visual Design Rules

### 2.1 No gradients
- Do not use background gradients, text gradients, or gradient overlays.
- Use solid color blocks, tonal layering, and subtle textures only when needed.

### 2.2 No traditional design
- Avoid standard corporate templates and familiar training website layouts.
- Do not use conservative hero layouts, classic card grids, or textbook brochure styles.
- Prefer bold layout choices, asymmetry, and modern spacing.

### 2.3 Creative design direction
- Use a clean, expressive, and playful visual language.
- Favor geometric shapes, dynamic spacing, and strong typography hierarchy.
- Combine bright brand colors with soft neutrals and deep accents.
- Use motion lightly: reveal animations, hover transitions, scroll-based entrance effects.
- Keep the design age-appropriate for children and teens.

### 2.4 Branding and consistency
- Maintain consistency for colors, fonts, spacing, and buttons.
- Use the existing B-Genius identity colors from the project when possible.
- Build a mini design system with reusable tokens and components.

---

## 3. Pages and Content Structure

### 3.1 Home Page
Include:
- Hero section with strong headline, clear offer, and actions.
- Highlights section with academy benefits.
- Featured program packages.
- Testimonials.
- Benefits or impact metrics.
- CTA banners across the page.

### 3.2 About Us
Include:
- Academy story.
- Mission and vision.
- Team or coach section.
- Values and methodology.

### 3.3 Services
Include:
- Full listing of programs.
- Program detail cards.
- Target age ranges.
- Core outcomes and features.
- Pricing or package preview.

### 3.4 Contact Us
Include:
- Contact form.
- Academy information.
- Map embed placeholder.
- Contact details.
- CTA to book or request info.

---

## 4. Technical Quality Rules

### 4.1 Accessibility
- Use semantic HTML.
- Label forms clearly.
- Provide accessible button and link text.
- Ensure visible focus states.

### 4.2 SEO-ready structure
- Use meaningful page titles and descriptions.
- Include `meta` tags and OpenGraph tags.
- Use heading hierarchy correctly.
- Use descriptive `alt` text for images.

### 4.3 Performance
- Load only required fonts.
- Optimize images using modern formats when possible.
- Keep bundles small.
- Avoid unnecessary dependencies.

### 4.4 Responsiveness
- Ensure layout works on mobile, tablet, and desktop.
- Use Tailwind breakpoints and responsive utilities.
- Ensure text remains readable on small screens.

---

## 5. AI Generation Rules

### 5.1 Code style and structure
- Generate clean, readable code.
- Prefer component reuse.
- Keep the file structure intuitive.
- Use TypeScript in Next.js pages and components if possible.

### 5.2 Naming conventions
- Use descriptive folder names: `app/home`, `app/about`, `app/services`, `app/contact`, `backend/routes`, `backend/controllers`, `backend/data`.
- Use clear component names like `HeroSection`, `ServiceCard`, `TestimonialsPanel`, `AdminMessagesTable`.

### 5.3 Design system
- Define a Tailwind theme and custom utilities.
- Create shared components for:
  - buttons
  - cards
  - section headers
  - banners
  - forms
- Avoid one-off styles when a reusable component fits.

### 5.4 Language and localization
- Build support for both Arabic and English content.
- Use a language switching mechanism.
- Keep translations in a structured data file.
- Render RTL layout correctly for Arabic.

---

## 6. Recommended Folder Layout

```
app/
  layout.tsx
  page.tsx
  about/page.tsx
  services/page.tsx
  contact/page.tsx
  dashboard/page.tsx
  components/
    HeroSection.tsx
    FeatureGrid.tsx
    ProgramCard.tsx
    TestimonialCard.tsx
    ContactForm.tsx
    DashboardLayout.tsx

backend/
  package.json
  server.js
  routes/
    services.js
    packages.js
    contact.js
    messages.js
  data/
    services.json
    packages.json
    messages.json
  utils/
    storage.js

public/
  images/
  favicon.ico

styles/
  globals.css
  tailwind.css

README.md
AI_PROJECT_GUIDELINES.md
```

---

## 7. Final Notes
- Do not use gradients anywhere in the visual system.
- Avoid conventional, safe learning site templates.
- Create a bold, contemporary, and playful website experience.
- Keep frontend and backend separated clearly.
- Ensure the project is ready for both English and Arabic audiences.

This guideline is the reference for AI or a development team when generating the complete site and backend.
