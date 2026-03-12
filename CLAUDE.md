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
- `src/App.tsx` - Root component; composes Hero, Technologies, Projects, and Footer sections
- `src/App.css` - Global styles and CSS custom properties for theming
- `src/index.css` - Base/reset styles
- `src/lib/data.ts` - Source of truth for all portfolio content (name, tagline, technologies, projects, links)
- `src/hooks/useTheme.ts` - Light/dark theme toggle with localStorage persistence and `prefers-color-scheme` detection
- `src/hooks/useScrollReveal.ts` - Scroll-based reveal animation hook
- `src/components/Hero/` - Top section with name, tagline, photo, social links, and theme toggle
- `src/components/Technologies/` - Grid of technology cards
- `src/components/TechCard/` - Individual technology card with icon, color, and experience areas
- `src/components/Projects/` - Grid of project cards
- `src/components/ProjectCard/` - Individual project card with year, technologies, and description
- `src/components/Footer/` - Footer with copyright and source link
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
- All portfolio content lives in `src/lib/data.ts` and is the primary source for content changes
- Light/dark theming is driven by a `data-theme` attribute on `<html>`, toggled via `useTheme`; theme preference is persisted in `localStorage`

## Assets

- Static assets are served from the `public/` directory
- Family photo at `/family.png` (used in Hero section)