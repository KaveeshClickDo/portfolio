# Kaveesh Senevirathne — Portfolio

A modern, production-ready portfolio website built with **Next.js 14**, **Tailwind CSS**, and **JavaScript**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** JavaScript
- **Fonts:** Playfair Display, DM Sans, JetBrains Mono (Google Fonts)
- **Deployment:** Vercel / any Node.js host

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.js            # Root layout with SEO metadata
│   ├── page.js              # Home page
│   ├── not-found.js         # Custom 404 page
│   ├── sitemap.js           # Dynamic sitemap
│   └── robots.js            # Robots.txt config
├── components/
│   ├── Navbar.js            # Navigation with scroll effects
│   ├── Hero.js              # Hero/landing section
│   ├── About.js             # About me section
│   ├── Experience.js        # Work experience timeline
│   ├── Projects.js          # Professional projects grid
│   ├── Skills.js            # Skills & tech stack
│   ├── Education.js         # Academic background
│   ├── Contact.js           # Contact information
│   ├── Footer.js            # Site footer
│   └── SectionHeading.js    # Reusable section header
├── lib/
│   ├── data.js              # All portfolio content/data
│   └── useInView.js         # Scroll animation hook
├── public/                  # Static assets
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎨 Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll-triggered animations
- Dark theme with gold/amber accents
- SEO optimized (meta tags, Open Graph, sitemap, robots.txt)
- Custom 404 page
- Performance optimized
- Accessible navigation

## 📝 Customization

All portfolio content lives in `lib/data.js`. Update personal info, experience, projects, skills, and education there.

## 🌐 Deployment

Deploy to **Vercel** (recommended):

```bash
npm i -g vercel
vercel
```

Or build and deploy to any Node.js hosting:

```bash
npm run build
npm start
```

## 📄 License

MIT
