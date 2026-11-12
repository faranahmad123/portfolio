import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/assets";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "DevNest | Website, App & Automation Agency",
  description:
    "DevNest builds websites, mobile apps, business automation and manages social media accounts for growing brands.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "DevNest",
    "Digital Agency",
    "Website Development",
    "Mobile Apps",
    "Business Automation",
    "Social Media Management",
    "Next.js",
    "Flutter",
    "Python",
    "Workflows",
  ],
  authors: [{ name: siteConfig.brandName, url: siteConfig.siteUrl }],
  creator: siteConfig.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: "DevNest | Website, App & Automation Agency",
    description:
      "DevNest builds websites, mobile apps, business automation and manages social media accounts for growing brands.",
    siteName: siteConfig.brandName,
    images: [
      {
        url: OG_IMAGE || "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevNest | Website, App & Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevNest | Website, App & Automation Agency",
    description:
      "DevNest builds websites, mobile apps, business automation and manages social media accounts for growing brands.",
    images: [OG_IMAGE || "/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// JSON-LD ProfessionalService schema for DevNest
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.brandName,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/images/logo.png`,
  image: `${siteConfig.siteUrl}/images/logo.png`,
  description:
    "DevNest builds websites, mobile apps, business automation and manages social media accounts for growing brands.",
  email: siteConfig.email,
  telephone: siteConfig.whatsappNumber,
  founder: {
    "@type": "Person",
    name: siteConfig.founderName,
  },
  sameAs: [siteConfig.instagramUrl, siteConfig.whatsappLink],
  knowsAbout: [
    "Website Development",
    "Mobile App Development",
    "Business Automation",
    "Social Media Management",
    "Next.js",
    "React",
    "Flutter",
    "Python",
    "APIs",
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
