import { hasLocale, NextIntlClientProvider } from "next-intl";
import { FirstVisitLoader, Footer, Navbar } from "../../components";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { setRequestLocale } from "next-intl/server";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Adam Kaščák - Web Dizajn a 3D",
  description:
    "Som web dizajnér a 3D artist pôsobiaci v Nitre, špecializujúci sa na tvorbu moderných webových stránok a detailných 3D modelov.",
  metadataBase: new URL("https://adamkascak.com"),
  openGraph: {
    title: "Adam Kaščák - Web Dizajn a 3D",
    description:
      "Som web dizajnér a 3D artist pôsobiaci v Nitre, špecializujúci sa na tvorbu moderných webových stránok a detailných 3D modelov.",
    type: "article",
    authors: ["Adam", "Kaščák"],
    images: [
      {
        url: "/og-image.png", // resolved via metadataBase
        width: 192,
        height: 192,
        alt: "Adam Kaščák – Web Dizajn a 3D",
      },
    ],
  },

  icons: {
    icon: "/apple-icon.png",
    shortcut: "/apple-icon.png",
    apple: "/apple-icon.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adam Kaščák - Web Dizajn a 3D",
    description:
      "Som web dizajnér a 3D artist pôsobiaci v Nitre, špecializujúci sa na tvorbu moderných webových stránok a detailných 3D modelov.",
    images: ["https://adamkascak.com/twitter-image.png"], // Must be an absolute URL
  },

  generator: "Next.js",
  applicationName: "Adam Kaščák Portfólio",
  referrer: "origin-when-cross-origin",
  keywords: ["Web", "Dizajn", "3D", "Nitra", "Portfolio", "Stránky"],
  authors: [{ name: "Adam Kaščák" }],
  creator: "Adam Kaščák",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} className="transition-colors duration-300 ease-in-out">
      <body>
        <div id="root" className="flex flex-col min-h-screen w-full">
          <FirstVisitLoader />
          <NextIntlClientProvider>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
