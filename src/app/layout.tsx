import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/assets";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faran Ahmad | Software Engineer — React, Angular, Flutter & Docker",
  description:
    "Frontend-focused Software Engineer building responsive React & Angular SPAs, cross-platform Flutter apps, and containerized deployments with Docker. Based in Pakistan.",
  keywords: [
    "Faran Ahmad",
    "Software Engineer",
    "React",
    "Angular",
    "Flutter",
    "Docker",
    "Frontend Developer",
    "DevOps",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Faran Ahmad" }],
  creator: "Faran Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faranahmad.dev",
    title: "Faran Ahmad | Software Engineer",
    description:
      "Frontend-focused Software Engineer building responsive React & Angular SPAs, cross-platform Flutter apps, and containerized deployments with Docker.",
    siteName: "Faran Ahmad Portfolio",
    images: [
      {
        url: OG_IMAGE || "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faran Ahmad — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faran Ahmad | Software Engineer",
    description:
      "Frontend-focused Software Engineer building responsive React & Angular SPAs, cross-platform Flutter apps, and containerized deployments with Docker.",
    images: [OG_IMAGE || "/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// JSON-LD Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faran Ahmad",
  jobTitle: "Software Engineer",
  url: "https://faranahmad.dev",
  email: "contactfaranahmad@gmail.com",
  sameAs: [
    "https://github.com/faranahmad123",
    "https://linkedin.com/in/faran02",
  ],
  knowsAbout: [
    "React",
    "Angular",
    "Flutter",
    "TypeScript",
    "Docker",
    "Python",
    "Firebase",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
