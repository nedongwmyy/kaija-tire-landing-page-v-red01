/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  webpack: (config, { dev, isServer }) => {
    // 配置文件监听选项，忽略特定目录
    if (!isServer) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/System Volume Information/**',
          '**/.next/**',
          '**/logs/**',
          '**/dist/**',
          '**/build/**',
        ],
        followSymlinks: true,
        aggregateTimeout: 300,
      };
    }
    
    return config;
  },
}

export default nextConfig
