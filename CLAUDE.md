# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint (flat config, eslint.config.mjs)
- `npm run start` — serve production build

## Architecture

- **Next.js 16** with App Router (React 19, TypeScript, Tailwind CSS v4)
- All routes live in `app/` — uses `layout.tsx` + `page.tsx` convention
- Styling: Tailwind CSS v4 via `@tailwindcss/postcss` plugin (no tailwind.config — config is in `app/globals.css`)
- Fonts: Geist and Geist Mono loaded via `next/font/google`
- Path alias: `@/*` maps to project root

## Key Conventions

- ESLint uses flat config with `eslint-config-next` (core-web-vitals + typescript presets)
- No test framework is configured yet