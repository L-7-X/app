// Application configuration
// This file contains configuration settings for the app

export const config = {
  app: {
    name: 'L7X',
    description: 'A Next.js application',
    version: '0.1.0',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  },
  features: {
    enableAnalytics: process.env.NODE_ENV === 'production',
    enableDebugMode: process.env.NODE_ENV === 'development',
  },
} as const;
