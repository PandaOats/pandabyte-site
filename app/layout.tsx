import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { SITE_META } from "@/lib/site-content";
import "../styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  keywords: [...SITE_META.keywords],
  metadataBase: new URL(SITE_META.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.shortDescription,
    url: SITE_META.url,
    siteName: SITE_META.siteName,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_META.title,
    description: SITE_META.shortDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_META.url}/#website`,
      name: "Pandabyte",
      url: SITE_META.url,
      description: SITE_META.description,
    },
    {
      "@type": "Person",
      "@id": `${SITE_META.url}/#person`,
      name: "Huntington Co",
      url: SITE_META.url,
      jobTitle: "Software Engineer",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of California, Los Angeles",
        alternateName: "UCLA",
      },
      sameAs: [
        "https://github.com/PandaOats",
        "https://www.linkedin.com/in/huntington-co/",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} ${inter.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
