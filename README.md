# Kaija Tire Landing Page

A modern, responsive landing page for Kaija Tire built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with accessible components
- Optimized for performance
- Built with Next.js 15

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- Lucide React Icons

## Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kaija-tire-landing
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

## Development

To run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Production

To build the application for production:

```bash
pnpm build
# or
npm run build
```

To run the production build locally:

```bash
pnpm start
# or
npm start
```

## Project Structure

```
├── app/              # Next.js 13+ app directory
├── components/       # Reusable React components
├── contexts/         # React context providers
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── public/           # Static assets
└── styles/           # Global styles
```

## Environment Variables

If the application requires environment variables, create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.