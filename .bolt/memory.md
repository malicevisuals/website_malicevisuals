# Project memory

## Product intent & audience

- Personal/creative portfolio website showcasing work via video content.
- Includes a Portfolio section with video links and a "Latest Work" / "NEWS" section for recent content.
- Production-quality presentation is a priority.

## Brand personality & voice

- Bold, editorial tone with high-impact headings.
- Red used as an accent label color; white used for primary bold headings.
- Minimal, confident messaging — short labels like "LATEST WORK", "NEWS:".

## Visual design & UX direction

- Portfolio items rendered as thumbnail cards with hover effects and a play button overlay.
- Clicking a thumbnail opens the video in the same player (in-place, not a new tab).
- "Latest Work" section mirrors the Portfolio card style but scaled larger / full-width.
- Reusable shared thumbnail-card component exists for consistent hover and play behavior across sections.
- Typography emphasizes contrast: red uppercase labels above bold white headings.
- Sections are full-width and stacked vertically below the portfolio.
- YouTube videos are embedded via watch URL pattern (e.g., `youtu.be/<id>`).
- A short descriptive paragraph now appears directly below the "NEWS:" heading introducing the featured video.

## Decisions, constraints & rationale

- Stack: Vite + React, Tailwind CSS, Lucide React icons; no extra UI/icon packages.
- Shared card component was extracted from Portfolio so "Latest Work" reuses identical hover/play UX at a larger size.
- Build verified via `npm run build`; browser preview not available in this environment.
- New section placement is directly below the Portfolio section on the home page.
- Featured video is "ACCVSED - 1981 (Official Video)", directed by Pascal Klebe.
- Descriptive paragraph under NEWS heading added with video title, single name, and director credit.
- Release date and live view counter deferred — no YouTube Data API key is configured for this project; both require fetching from the YouTube Data API.

## Open questions & assumptions

- YouTube Data API key not yet provided; once available, release date and live view count should be displayed and auto-updated.
- Exact responsive breakpoints for the larger "Latest Work" card not yet specified — assumes full-width scaling with existing Tailwind responsive behavior.
- No confirmation yet on whether additional "Latest Work" items will be added or if it remains a single featured video.
- Accessibility considerations (focus states, keyboard activation for video thumbnails) not explicitly requested but should follow existing Portfolio card patterns.