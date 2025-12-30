import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://victorcuellar.fit'),
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Victor Cuellar',
  url: 'https://victorcuellar.fit',
  description:
    'Preparador físico y profesor universitario con más de 20 años de experiencia en fútbol formativo, profesional y alto rendimiento. Entrenamiento personalizado enfocado en rendimiento, salud integral y trabajo en altura.',
  jobTitle:
    'Preparador Físico | Profesor Universitario en Educación Física | Subsecretario de Deportes (Salta)',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Salta',
    addressRegion: 'Salta',
    addressCountry: 'AR',
  },
  knowsAbout: [
    'Preparación física',
    'Alto rendimiento',
    'Entrenamiento de fuerza',
    'Potencia',
    'Readaptación y reentrenamiento',
    'Fútbol',
    'Hockey',
    'Tecnología aplicada al rendimiento',
    'Control de carga',
    'Trabajo en altura',
  ],
  sameAs: [
    'https://www.instagram.com/vc_estudio/',
    'https://www.facebook.com/vc.estudio.gym/',
  ],
  affiliation: [
    { '@type': 'Organization', name: 'Universidad Católica de Salta' },
    { '@type': 'Organization', name: 'ATFA' },
    { '@type': 'Organization', name: 'G-SE' },
    { '@type': 'Organization', name: 'EXOS' },
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Subsecretaría de Deportes – Provincia de Salta',
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Universidad Católica de Salta',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XGDWTS56N7"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XGDWTS56N7', { anonymize_ip: true });
          `}
        </Script>

        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="7WY-ssdKnuOmHX1G8Hm6sqN6eq9yCJvXMHrHdyXDKD4" />
      </head>

      <body>
        {/* ✅ Nivel 3 — Schema.org (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {children}

        {/* Rocket scripts */}
        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fvctorcull6011back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.12"
        />
        <script
          type="module"
          defer
          src="https://static.rocket.new/rocket-shot.js?v=0.0.2"
        />
      </body>
    </html>
  );
}
