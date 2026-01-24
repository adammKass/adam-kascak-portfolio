"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <head>
        <meta property="og:title" content="Adam Kaščák | Web Dizajn a 3D" />
        <meta
          property="og:description"
          content="Portfólio prezentujúce webdizajn, 3D modelovanie a ilustrácie. Objavte moje služby, kreatívnu tvorbu a kontaktujte ma pre diskusiu o vašom projekte."
        />
        <meta
          property="og:image"
          content="https://adamkascak.com/favicon/favicon-96x96.png"
        />
        <meta property="og:url" content="https://adamkascak.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adam Kaščák | Web Dizajn a 3D" />
        <meta
          name="twitter:description"
          content="Portfólio prezentujúce webdizajn, 3D modelovanie a ilustrácie. Objavte moje služby, kreatívnu tvorbu a kontaktujte ma pre diskusiu o vašom projekte."
        />
        <meta
          name="twitter:image"
          content="https://adamkascak.com/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Adam Kascak" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Portfólio prezentujúce webdizajn, 3D modelovanie a ilustrácie. Objavte moje služby, kreatívnu tvorbu a kontaktujte ma pre diskusiu o vašom projekte."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://adamkascak.com/" />

        <title>Adam Kaščák | Web Dizajn a 3D</title>
      </head>
      <body>
        <div id="root">
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </div>
      </body>
    </html>
  );
}
