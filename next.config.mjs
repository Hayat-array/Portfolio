/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.mongodb.net',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // Suppress warnings for optional Genkit dependencies
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        '@opentelemetry/exporter-jaeger': 'commonjs @opentelemetry/exporter-jaeger',
      });
    }
    config.ignoreWarnings = [
      { module: /node_modules\/handlebars\/lib\/index\.js/ },
      { module: /node_modules\/@opentelemetry\/sdk-node/ },
      { module: /node_modules\/dotprompt/ },
    ];
    return config;
  },
  serverExternalPackages: ['mongodb'],
};

export default nextConfig;
