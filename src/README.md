# Source Code Structure

This directory contains the main source code for the L7X application, organized with a clear separation of concerns.

## Folder Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── favicon.ico        # App favicon
├── components/            # Reusable React components
│   ├── ui/               # Basic UI components (Button, Input, Card, etc.)
│   ├── layout/           # Layout components (Header, Footer, Sidebar, etc.)
│   └── index.ts          # Component exports
├── hooks/                # Custom React hooks
│   └── index.ts          # Hook exports
├── lib/                  # Utility functions and configurations
│   ├── utils.ts          # Common utility functions
│   ├── config.ts         # App configuration
│   └── index.ts          # Library exports
├── types/                # TypeScript type definitions
│   └── index.ts          # Type exports
├── constants/            # Application constants
│   └── index.ts          # Constant exports
└── styles/               # Global styles and CSS
    └── globals.css       # Global CSS styles
```

## Guidelines

### Components
- **UI Components**: Basic, reusable UI elements (buttons, inputs, cards)
- **Layout Components**: Page structure components (headers, footers, sidebars)
- Each component folder should have an `index.ts` file for clean exports

### Hooks
- Custom React hooks for shared logic
- Use descriptive names (e.g., `useLocalStorage`, `useDebounce`)

### Lib
- **utils.ts**: Pure utility functions
- **config.ts**: Application configuration and environment variables

### Types
- TypeScript interfaces and type definitions
- Group related types together

### Constants
- Application-wide constants
- API endpoints, routes, configuration values

### Styles
- Global CSS and style files
- Component-specific styles should be co-located with components
