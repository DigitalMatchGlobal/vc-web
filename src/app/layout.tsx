import React from 'react';
import type { Metadata } from 'next';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://victorcuellar.fit'),
  alternates: {
    canonical: '/',
  },
  title: 'Victor Cuellar | Preparación Física Aplicada al Rendimiento',
  description:
    'Entrenamiento personalizado enfocado en rendimiento: evaluación, planificación y seguimiento. Alto rendimiento, formación y salud integral. Cupos limitados. Contacto por WhatsApp.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
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
