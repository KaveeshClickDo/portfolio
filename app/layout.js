import './globals.css';

export const metadata = {
  metadataBase: new URL('https://kaveesh.cv'),
  title: {
    default: 'Kaveesh Senevirathne — Fullstack Software Engineer',
    template: '%s | Kaveesh Senevirathne',
  },
  description:
    'Portfolio of Kaveesh Senevirathne — Fullstack Software Engineer specializing in Spring Boot, React, Angular, Next.js, and enterprise-grade web applications.',
  keywords: [
    'Kaveesh Senevirathne',
    'Software Engineer',
    'Fullstack Developer',
    'Spring Boot',
    'React',
    'Angular',
    'Next.js',
    'Java',
    'JavaScript',
    'Sri Lanka',
    'UK',
    'Portfolio',
  ],
  authors: [{ name: 'Kaveesh Senevirathne' }],
  creator: 'Kaveesh Senevirathne',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kaveesh.cv',
    siteName: 'Kaveesh Senevirathne',
    title: 'Kaveesh Senevirathne — Fullstack Software Engineer',
    description:
      'Portfolio of Kaveesh Senevirathne — Fullstack Software Engineer building enterprise web applications with modern technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kaveesh Senevirathne Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaveesh Senevirathne — Fullstack Software Engineer',
    description:
      'Portfolio of Kaveesh Senevirathne — Fullstack Software Engineer building enterprise web applications.',
    creator: '@KHSenevirathne',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://kaveesh.cv" />
      </head>
      <body className="min-h-screen">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
