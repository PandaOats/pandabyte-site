# PandaByte

Huntington Co's portfolio and product pages. Built with Next.js and deployed on Vercel at https://www.pandabyte.dev.

## Development

```sh
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` before submitting changes.

## Portfolio content

- Homepage and experience: `app/page.tsx`
- Navigation, projects, contact links, résumé URL: `lib/site-content.ts`
- Interactive mascot: `components/site/panda-window.tsx`
- Résumé: `public/Huntington_SWE_Resume.pdf`

The legacy `/Huntington_SWE_Resume-1.pdf` URL serves the same current document to preserve existing links. Replace both copies when updating the résumé.

## Panda window verification

- Drag the title bar with a mouse or touch; the window stays inside its stage.
- Focus the title bar and use arrow keys to move; Home or Escape resets position.
- Minimize, restore, reset, close, and reopen. Focus returns to the reopen control or title bar as appropriate.
- Resize the viewport after moving the window; its position resets to remain reachable.
- Hover or keyboard focus shows the amber glow. Reduced-motion preferences are respected.
- Verify at 320px, 768px, 1024px, and 1440px widths, and check all project filters.
