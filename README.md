# Haoxiang Auto Parts - B2B Website

Professional auto parts B2B website for Guangzhou Hao Xiang Auto Parts Co., Ltd. Built with React 19, Vite, TypeScript, and Tailwind CSS.

## Features

- Single-page scrolling B2B landing site
- Hero section with WhatsApp CTA
- About Us / Company Profile
- Product categories showcase (7 categories)
- Featured core products (EGR Valves + Diesel Injection Pumps)
- Factory / manufacturing capabilities
- 5 competitive advantages
- Contact form + WhatsApp integration
- Fully responsive design
- SEO optimized meta tags
- Floating WhatsApp button

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion (animations)
- Sonner (toast notifications)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to GitHub Pages

1. Update `base` in `vite.config.ts` to your repo name (e.g., `'/haoxiang-auto-parts/'`)
2. Install gh-pages: `npm install -D gh-pages`
3. Run: `npm run deploy`

## Project Structure

```
src/
├── components/          # Shared components
│   ├── Header.tsx       # Top navigation bar
│   ├── Footer.tsx       # Page footer
│   ├── Layout.tsx       # Route layout wrapper
│   └── WhatsAppFloat.tsx # Floating WhatsApp button
├── data/                # Mock data
│   ├── company.ts       # Company info
│   ├── products.ts      # Product categories
│   ├── brands.ts        # Car brands
│   └── advantages.ts    # Competitive advantages
├── hooks/               # Custom hooks
├── lib/                 # Utility functions
├── pages/
│   ├── HomePage/        # Main landing page
│   │   └── sections/    # Page sections
│   └── NotFoundPage/    # 404 page
├── app.tsx              # App routes
├── main.tsx             # Entry point
├── index.css            # Global styles
├── tailwind-theme.css   # Tailwind theme config
└── typography.css       # Typography styles
```

## Customization

- **Company info**: Edit `src/data/company.ts`
- **Product categories**: Edit `src/data/products.ts`
- **Brands**: Edit `src/data/brands.ts`
- **Advantages**: Edit `src/data/advantages.ts`
- **Colors**: Edit CSS variables in `src/tailwind-theme.css`
- **WhatsApp number**: Search and replace `8613005156303` throughout the project
