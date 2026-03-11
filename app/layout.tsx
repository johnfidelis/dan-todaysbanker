// app/layout.tsx
export const dynamic = "force-dynamic";

import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css";
import { AuthProvider } from "@/context/AuthContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// --- Static External CSS & Fonts ---
const externalStylesheets = [
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
];

const googleFonts: string[] = [];

// --- Static Site-Wide Schema Markup ---
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://forebetpredict.com/#organization",
  name: "Forebet Prediction and Football Stats",
  url: "https://forebetpredict.com/",
  logo: "/forebeticon.png",
  sameAs: [
    "https://facebook.com/forebetpredict",
    "https://twitter.com/forebetpredict",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://forebetpredict.com/#website",
  url: "https://forebetpredict.com/",
  name: "Forebet Prediction and Football Stats",
  alternateName: "Forebet Prediction and Football Stats",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://forebetpredict.com/search?dt={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Flutterwave */}
        <script src="https://checkout.flutterwave.com/v3.js" />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="47MbWq_pUq3wv3TKJbMab0eWKRbeNFJXgcliexsneW8"
        />

        {/* Google AdSense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-8287507009227240"
        />

        {/* Ezoic ads snippet (static) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              ezstandalone = window.ezstandalone || { cmd: [] };
              ezstandalone.cmd.push(function () {
                ezstandalone.showAds(104, 105);
              });
            `,
          }}
        />

        {/* Ahrefs */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="MthuqSQq3mQzogBpfAR8Jg"
          async
        />

        {/* Preconnect for Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Fonts */}
        {googleFonts.map((href) => (
          <link key={href} href={href} rel="stylesheet" />
        ))}
        {/* External CSS Stylesheets */}
        {externalStylesheets.map((href) => (
          <link key={href} href={href} rel="stylesheet" />
        ))}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Forebet Prediction and Football Stats"
        />
        <meta
          property="og:image"
          content="https://forebetpredict.com/forebeticon.png"
        />
        <meta property="og:locale" content="en_US" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme & App Meta */}
        <meta name="theme-color" content="#f8ca15" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-TileColor" content="#f8ca15" />
        <meta name="msapplication-TileImage" content="/forebeticon.png" />
        <meta name="application-name" content="Forebet" />
        <meta name="apple-mobile-web-app-title" content="Forebet" />
        <link rel="apple-touch-icon" href="/forebeticon.png" />

        {/* Extra Mobile & SEO Meta */}
        <meta name="pinterest-rich-pin" content="true" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="referrer"
          content="no-referrer-when-downgrade"
        />

        {/* Icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/forebeticon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/forebeticon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="/forebeticon.png"
        />
        <link rel="shortcut icon" href="/forebeticon.png" />
        <link rel="apple-touch-icon" href="/forebeticon.png" />

        {/* Robots and Googlebot */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* SITE-WIDE SCHEMA MARKUP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

      
      </head>

      <body className={inter.className} >
        {/* Google AdSense JS */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8287507009227240"
          crossOrigin="anonymous"
        />

        {/* Google Analytics (gtag) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7EE3173FZV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7EE3173FZV');
            `,
          }}
        />

        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
