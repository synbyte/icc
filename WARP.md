# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for Integrity Care Connection (ICC), a mental health and substance abuse treatment center website. The site is built with React 19, TypeScript, and Tailwind CSS, focusing on providing information about treatment services and facilitating client contact.

## Common Development Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build production bundle with Turbopack
npm start            # Start production server
npm run lint         # Run ESLint
```

### Single File Operations
- **Running dev server**: `npm run dev` starts the development server on http://localhost:3000 with Turbopack enabled
- **Building**: `npm run build` creates an optimized production build using Next.js 15 with Turbopack
- **Linting**: `npm run lint` runs ESLint with the Next.js configuration

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **React**: Version 19 with RSC (React Server Components) support
- **Styling**: Tailwind CSS v4 with custom brand colors
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: Motion library + CSS animations
- **Analytics**: Vercel Analytics integration
- **Database**: Supabase for contact form submissions

### Directory Structure
- `/app/` - Next.js App Router pages (layout.tsx, page.tsx, route segments)
- `/components/` - Reusable React components
  - `/ui/` - UI primitives and shadcn/ui style components
  - `navigation.tsx` - Main site navigation with mobile menu
  - `footer.tsx` - Site footer with contact info and links
- `/lib/` - Utility functions (cn utility for class merging)
- `/public/` - Static assets (images, logos, SVGs)

### Key Pages & Routes
- `/` - Home page with hero section, services overview, and CTAs
- `/about` - About page with team member profiles and company values
- `/services` - Services offered
- `/programs` - Treatment programs
- `/contact` - Contact form and information
- `/patient` - Patient portal access
- `/admin` - Administrative dashboard for contact submissions (authentication required)

### Design System

**Brand Colors** (defined in tailwind.config.js):
- Primary blue: `#124767` (`brand-blue`)
- Brand gold: `#C39A6A` (`brand-gold`)
- With light/dark variants for each

**Typography**: 
- Geist Sans (primary) and Geist Mono fonts via Google Fonts
- Custom spacing and sizing scales

**Component Patterns**:
- Uses `cn()` utility from `@/lib/utils` for conditional classes
- Responsive design with mobile-first approach
- Consistent use of Lucide React icons
- Hero sections with overlay gradients and background images
- Cards with hover states and smooth transitions

### State Management
- Client components use React useState for local state
- No global state management library (suitable for this content-focused site)

### Styling Approach
- Tailwind CSS with custom configuration
- Custom brand color scheme
- Responsive utilities throughout
- Consistent spacing and typography scale
- CSS animations and transitions for interactions

## Development Guidelines

### Component Structure
- Functional components with TypeScript
- Client components marked with "use client" directive
- Server components by default (Next.js 15 App Router)
- Props interfaces defined inline for simple components

### Image Handling
- Uses Next.js Image component for optimization
- Static assets stored in `/public/` directory
- Team member images imported as modules for type safety

### Navigation
- Responsive navigation with mobile hamburger menu
- Sticky header with backdrop blur
- Consistent link styling and hover states

### SEO & Performance
- Metadata defined in layout.tsx
- Image optimization with Next.js Image component
- Vercel Analytics integration
- Font optimization with Next.js font loading

### Code Quality
- ESLint configuration extends Next.js recommended rules
- TypeScript strict mode enabled
- Custom eslint rule disables react/no-unescaped-entities for content-heavy pages

### Database Integration
- Contact form submissions automatically saved to Supabase
- Form includes loading states, error handling, and success feedback
- TypeScript interfaces defined for type safety (`ContactForm`, `Contact`)
- Async/await pattern for database operations

### Admin Dashboard
- Protected admin interface at `/admin` route (no public links)
- Simple login authentication with localStorage persistence
- Tabular view of all contact submissions with search and filtering
- Modal popup for detailed view of individual submissions
- Direct email/phone contact actions from admin interface
- Responsive design with urgency level indicators

## Key Integrations

- **Vercel Analytics**: Integrated in root layout for performance tracking
- **Supabase**: Backend-as-a-Service for contact form data storage
  - Database URL: `https://afkkbbhspuejreqpehtn.supabase.co`
  - Contact submissions stored in `contacts` table
  - Client configured in `/lib/supabase.ts`
- **Tailwind CSS v4**: Latest version with PostCSS integration
- **shadcn/ui patterns**: Component structure follows shadcn conventions without full installation
- **Motion library**: For advanced animations beyond CSS transitions

## Content Management

This is a static site with content embedded in components. Key content areas:
- Hero sections with gradient overlays
- Service descriptions and feature lists
- Team member profiles with modal details
- Contact information and CTAs throughout

The site focuses on accessibility and clear calls-to-action for users seeking mental health and addiction treatment services.