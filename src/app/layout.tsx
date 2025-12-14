import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lais Nutri | Nutrição Comportamental & Esportiva em BH",
  description:
    "Transforme sua relação com a alimentação. Consultas presenciais em Savassi e Pampulha. Agendamento online via WhatsApp.",
  keywords: [
    "nutricionista",
    "Belo Horizonte",
    "nutrição comportamental",
    "nutrição esportiva",
    "emagrecimento",
    "BH",
  ],
  authors: [{ name: "Lais Nutri", url: "https://laisnutri.com.br" }],
  creator: "Lais Nutri",
  publisher: "Lais Nutri",
  robots: "index, follow",
  metadataBase: new URL("https://laisnutri.com.br"),
  alternates: {
    canonical: "https://laisnutri.com.br",
  },
  openGraph: {
    title: "Lais Nutri - Sua Nutricionista em Belo Horizonte",
    description:
      "Transforme sua vida com nutrição personalizada e comportamental",
    url: "https://laisnutri.com.br",
    siteName: "Lais Nutri",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lais Nutri - Nutricionista Especializada",
        type: "image/jpeg",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lais Nutri",
    description: "Nutrição Comportamental & Esportiva em Belo Horizonte",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://laisnutri.com.br",
  name: "Lais Nutri",
  alternateName: "Lais Nutrição",
  description:
    "Nutricionista especializada em nutrição comportamental e esportiva em Belo Horizonte",
  url: "https://laisnutri.com.br",
  telephone: "+5531993034536",
  email: "contato@laisnutri.com.br",
  priceRange: "$$$",
  image: "/og-image.jpg",
  logo: "/logo.svg",
  sameAs: [
    "https://instagram.com/laisnutri",
    "https://facebook.com/laisnutri",
    "https://linkedin.com/company/laisnutri",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Av. do Contorno, 6000",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "30110-110",
      addressCountry: "BR",
      name: "Unidade Savassi",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Av. Pres. Antônio Carlos, 7000",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "31310-100",
      addressCountry: "BR",
      name: "Unidade Pampulha",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Belo Horizonte",
    "@id": "https://en.wikipedia.org/wiki/Belo_Horizonte",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#10b981" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
