import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
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

export const metadata: Metadata = {
  title: "Capital Legal Masters — Yuridik firma | O'zbekiston",
  description:
    "OOO «Capital Legal Masters» — O'zbekiston Respublikasi qonunchiligi asosida tadbirkorlik faoliyatini yuridik ta'minlash, korporativ huquq va hakamlik sudida ixtisoslashgan professional yuridik firma. ООО «Capital Legal Masters» — юридическая фирма в Узбекистане.",
  keywords: [
    "yuridik firma Toshkent",
    "Capital Legal Masters",
    "hakamlik sudi",
    "korporativ huquq",
    "tadbirkorlik huquqi",
    "юридическая фирма Узбекистан",
    "арбитражный суд Узбекистан",
    "корпоративное право",
  ],
  openGraph: {
    title: "Capital Legal Masters",
    description:
      "O'zbekiston Respublikasida professional yuridik xizmatlar. Kompaniyamiz huzurida doimiy hakamlik sudi faoliyat yuritadi.",
    type: "website",
    locale: "uz_UZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <div className="noise-layer" aria-hidden="true" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
