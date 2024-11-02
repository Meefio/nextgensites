![NextGenSites Logo](./public/nextgensites-logo.png)  # NextGenSites - Project Documentation

[nextgensites.vercel.app](https://nextgensites.vercel.app)
After final deployment: [nextgensites.pl](https://nextgensites.pl)

## 🚀 About
NextGenSites is a modern platform for creating and managing websites using cutting-edge web technologies.

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: Supabase
- **ORM**: Drizzle
- **Authentication**: NextAuth V5
- **UI Components**: Shadcn/ui
- **Styling**: Tailwind CSS
- **Monorepo**: Turborepo
- **Monitoring**: Sentry, PostHog
- **Email**: Resend, React Email
- **Validation**: Zod
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 📁 Project Structure
```
/src
  /app
    /api
      /contact
    /(...routes)
  /components
    /ui (shadcn/ui components)
      button.tsx
      card.tsx
      form.tsx
      input.tsx
      textarea.tsx
    contact-form.tsx
  /hooks
    use-toast.ts
  /lib
    /utils
  /config
  /types
```

## 🔧 Project Setup

### Requirements
- Node.js 18+
- pnpm 8+
- Supabase account
- Vercel account

### Installation
```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

## 🌟 Core Features
- Responsive design (mobile-first)
- Contact forms with validation
- Toast notification system
- API integration
- SEO optimization
- Accessibility (WCAG)

## 📝 Coding Conventions
- **Components**: PascalCase (e.g., ContactForm)
- **Hooks**: camelCase with "use" prefix (e.g., useToast)
- **UI Component Files**: kebab-case
- **Imports**: Absolute paths (@/components)
- **Styling**: Tailwind CSS (no inline CSS)

## 🔒 Security
- Zod data validation
- Secure API Routes
- Protected endpoints
- Input sanitization

## 📱 Responsiveness
- Mobile-first approach
- Tailwind breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🚀 Deployment
```bash
# Build project
pnpm build

# Deploy to Vercel
vercel deploy
```

## 📈 Monitoring and Analytics
- Sentry for error tracking
- PostHog for analytics
- Performance monitoring

## 🤝 Collaboration
- Conventional Commits
- Code Review guidelines
- ESLint and Prettier

## 📞 Contact
- Email: contact@nextgensites.com

---

© 2024 NextGenSites. All rights reserved.
