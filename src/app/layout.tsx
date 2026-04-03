import type { Metadata } from "next";
import { Cormorant, Heebo } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });
const heebo = Heebo({ variable: "--font-heebo", subsets: ["hebrew", "latin"], weight: ["300", "400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "Annette Lashes | הלחמת ריסים ואיפור מקצועי - מושב שילת, מודיעין",
  description: "Annette Lashes — הלחמת ריסים בכל הסגנונות, הרמת ריסים וגבות, עיצוב גבות ואיפור ערב וכלות. מושב שילת, מודיעין.",
  keywords: "הלחמת ריסים, הרמת ריסים, עיצוב גבות, איפור כלות, איפור ערב, ריסים מודיעין, שילת",
  openGraph: { title: "Annette Lashes | הלחמת ריסים ואיפור", description: "הלחמת ריסים, עיצוב גבות ואיפור מקצועי — מושב שילת, מודיעין", locale: "he_IL", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`${cormorant.variable} ${heebo.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-dvh flex flex-col antialiased">{children}</body>
    </html>
  );
}
