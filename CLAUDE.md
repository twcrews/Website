# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website built with Vite and TypeScript. The project is currently structured as a simple SPA (Single Page Application) showcasing personal information, technologies, and projects.

## Development Commands

- **Development server**: `npm run dev` - Starts the Vite dev server with hot module replacement
- **Build**: `npm run build` - Compiles TypeScript and builds the production bundle
- **Lint**: `npm run lint` - Runs ESLint to check code quality
- **Preview**: `npm run preview` - Serves the production build locally for testing

## Technology Stack

- **Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite (using rolldown-vite@7.1.12)
- **Linting**: ESLint 9 with TypeScript ESLint
- **Bundler Mode**: Modern ESNext with strict TypeScript settings

## Project Structure

- `src/main.tsx` - Application entry point with React root mounting
- `src/App.tsx` - Main application component (currently a simple demo)
- `src/lib/data.ts` - Contains comprehensive personal portfolio data including technologies, projects, and links
- `index.html` - HTML template with root div and module script loading

## TypeScript Configuration

The project uses a split TypeScript configuration:
- `tsconfig.app.json` - Main application TypeScript config targeting ES2022 with strict settings
- `tsconfig.node.json` - Node/build tools config targeting ES2023
- Both configs use bundler module resolution with strict linting enabled

## Key Development Notes

- The project uses React 19 with the new `react-jsx` transform
- Strict TypeScript settings are enforced including `noUnusedLocals` and `noUnusedParameters`
- ESLint is configured with recommended rules for TypeScript, React hooks, and React refresh
- The data structure in `src/lib/data.ts` contains the portfolio content and should be the primary source for any content changes
- Currently appears to be in a transitional state - recent commits mention "maintenance mode" and content stripping

## Assets

- Static assets are served from the `public/` directory
- React logo available at `src/assets/react.svg`
- Vite logo available at `/vite.svg`
- Family photo available at `/family.png`