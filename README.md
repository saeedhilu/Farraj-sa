# Farraj Industrial Group Website

A modern, professional website for Farraj Industrial Group - a leading provider of electrical systems and industrial solutions across the GCC region.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Comprehensive metadata and OpenGraph tags
- **Multilingual Support** - English and Arabic (i18n ready)
- **Contact Form** with API route
- **Reusable Components** - Hero sections, stats bars, cards, etc.
- **Brand Colors** - Custom theme matching Farraj identity

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or download the ZIP file

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
farraj-industrial/
├── app/
│   ├── about/              # About page
│   ├── api/
│   │   └── contact/        # Contact form API route
│   ├── case-studies/       # Case studies page
│   ├── contact/            # Contact page
│   ├── industries/         # Industries served page
│   ├── solutions/          # Solutions page
│   ├── globals.css         # Global styles with custom theme
│   ├── layout.tsx          # Root layout with header/footer
│   └── page.tsx            # Homepage
├── components/
│   ├── forms/
│   │   └── contact-form.tsx
│   ├── layout/
│   │   ├── header.tsx      # Main navigation
│   │   └── footer.tsx      # Footer with links
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── stats-bar.tsx
│   │   ├── solutions-grid.tsx
│   │   ├── case-study-card.tsx
│   │   └── cta-section.tsx
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── i18n/               # Internationalization config
│   └── utils.ts
└── README.md
\`\`\`

## Customization

### Brand Colors

The brand colors are defined in `app/globals.css`:

- **Primary Blue**: `#1B4965` - Trust, professionalism
- **Accent Orange**: `#E8A537` - Energy, innovation
- **Dark Gray**: `#2C3E50` - Text, depth
- **Neutral Light**: `#F5F7FA` - Backgrounds

### Typography

The project uses **Inter** for headings and body text, and **Roboto Mono** for numbers and technical content.

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Update navigation in `components/layout/header.tsx`

### Multilingual Support

Translation files are located in `lib/i18n/translations/`:
- `en.json` - English translations
- `ar.json` - Arabic translations

To add more languages, create a new JSON file and update `lib/i18n/config.ts`.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Environment Variables

For production, you may want to add:
- Email service API keys (SendGrid, Resend, etc.)
- Analytics tracking IDs
- Any other third-party service credentials

## SEO

The website includes:
- Comprehensive metadata for all pages
- OpenGraph tags for social sharing
- Structured data (can be extended)
- Sitemap generation (add `sitemap.ts` in app directory)
- Robots.txt configuration

## Performance

- Images use Next.js Image component for optimization
- Lazy loading for images
- Minimal JavaScript bundle
- CSS optimization with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Farraj Industrial Group. All rights reserved.

## Support

For questions or support, contact: info@farraj-sa.com
