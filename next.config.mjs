/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pixabay.com',
      },
    ],
  },
  // Las secciones de la landing son URLs limpias (sin #). Con estos rewrites,
  // entrar directo o refrescar en /planes, /ubicacion, etc. sirve la home (/)
  // y el cliente hace scroll a la sección correspondiente.
  async rewrites() {
    const sections = ['inicio', 'sobre-mi', 'servicios', 'planes', 'equipo', 'ubicacion'];
    return sections.map((section) => ({
      source: `/${section}`,
      destination: '/',
    }));
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    return config;
  },
};

export default nextConfig;