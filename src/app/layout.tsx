import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

// Canonical production domain — single source of truth for all URLs
const SITE_URL = "https://legalmasters.uz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Capital Legal Masters — Yuridik firma | O'zbekiston",
  description:
    "MCHJ «CAPITAL LEGAL MASTERS» — O'zbekiston Respublikasi qonunchiligi asosida tadbirkorlik faoliyatini yuridik ta'minlash, korporativ huquq va hakamlik sudida ixtisoslashgan professional yuridik firma. ООО «CAPITAL LEGAL MASTERS» — юридическая фирма в Узбекистане.",
  keywords: [
    "yuridik firma Toshkent",
    "Capital Legal Masters",
    "hakamlik sudi",
    "korporativ huquq",
    "tadbirkorlik huquqi",
    "юридическая фирма Узбекистан",
    "третейский суд Узбекистан",
    "корпоративное право",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Capital Legal Masters",
    description:
      "O'zbekiston Respublikasida professional yuridik xizmatlar. Kompaniyamiz huzurida doimiy hakamlik sudi faoliyat yuritadi.",
    url: SITE_URL,
    siteName: "Capital Legal Masters",
    type: "website",
    locale: "uz_UZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Legal Masters",
    description:
      "O'zbekiston Respublikasida professional yuridik xizmatlar. Kompaniyamiz huzurida doimiy hakamlik sudi faoliyat yuritadi.",
  },
};

// Anti-FOUC: runs before React hydration to set correct theme
const antiFlicker = `
(function(){
  try {
    var s = localStorage.getItem('clm-theme');
    var p = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', s || p);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`.trim();

// Schema.org JSON-LD structured data (organization + website)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#organization`,
      "name": "Capital Legal Masters",
      "legalName": "MCHJ «CAPITAL LEGAL MASTERS»",
      "url": SITE_URL,
      "logo": `${SITE_URL}/apple-icon`,
      "image": `${SITE_URL}/opengraph-image`,
      "telephone": "+998900150781",
      "email": "capitallegalmasters@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bodomzor yo'li ko'chasi, 1a",
        "addressLocality": "Toshkent",
        "addressRegion": "Toshkent shahri",
        "addressCountry": "UZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.32729140614236,
        "longitude": 69.28997506006668
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Uzbekistan"
      },
      "serviceType": [
        "Corporate Law",
        "Business Registration",
        "Arbitration",
        "Legal Consulting",
        "Contract Law"
      ],
      "description": "MCHJ «CAPITAL LEGAL MASTERS» — professional yuridik firma. Kompaniyamiz huzurida O'zR «Hakamlik sudlari to'g'risida»gi Qonun asosida doimiy hakamlik sudi faoliyat yuritadi.",
      "knowsLanguage": ["uz", "ru"],
      "hasMap": "https://www.openstreetmap.org/?mlat=41.32729&mlon=69.28998"
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Capital Legal Masters",
      "inLanguage": ["uz", "ru"],
      "publisher": { "@id": `${SITE_URL}/#organization` }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uz"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC theme script — runs synchronously before render */}
        <script dangerouslySetInnerHTML={{ __html: antiFlicker }} />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="noise-layer" aria-hidden="true" />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
