# MilRanger

A modern React web application built with Vite, TypeScript, and modern development tools.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React with hooks
- 🔷 **TypeScript** - Type safety and better DX
- 🎨 **Modern CSS** - Responsive design with CSS modules
- 🔍 **ESLint** - Code quality and consistency
- 🔥 **Hot Module Replacement** - Instant updates during development

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed on your system:
- [Download Node.js](https://nodejs.org) (LTS version recommended)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── App.tsx          # Main App component
├── App.css          # App styles
├── main.tsx         # Entry point
├── index.css        # Global styles
└── assets/          # Static assets
    └── react.svg    # React logo
```

## Development

This project uses Vite for fast development and building. The development server supports:

- Hot Module Replacement (HMR)
- TypeScript compilation
- ES modules
- CSS preprocessing

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
