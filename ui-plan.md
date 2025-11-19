# UI Component Plan

This document outlines the initial UI structure and reusable components for the LMS project. The focus is on clear, responsive layout scaffolding without implementing business logic.

## Goals

- Establish consistent layout primitives and reusable components
- Ensure responsive behavior for common breakpoints (sm, md, lg)
- Keep styles consistent via Tailwind utility classes

## Page Map

- `/` Home (marketing/landing)
- `/signin` Auth: Sign In
- `/signup` Auth: Sign Up
- `/dashboard` Smart redirect to role dashboards
- `/admin_dashboard` Admin-only
- `/student_dashboard` Student-only

## Layouts

- `RootLayout` (app/layout.js)
  - Global fonts, `<Navbar />`, `<Footer />`, and children
- `DashboardLayout` (components/layouts/DashboardLayout.jsx)
  - Optional sidebar on md+, header row, content area

## Reusable Components

- `Navbar` (components/Navbar.js)
  - Session-aware links; responsive nav
- `Footer` (components/Footer.js)
  - Simple footer with links/placeholders
- `Button` (components/ui/Button.jsx)
  - Props: `variant` (primary/secondary/ghost), `size` (sm/md/lg), `as` (button/a)
- `Input` (components/ui/Input.jsx)
  - Props: `label`, `type`, `placeholder`, `error`, `helperText`
- `Card` (components/ui/Card.jsx)
  - Container with header/body/footer slots via props or children
- (future) `Sidebar`, `Badge`, `Avatar`, `Modal`, `Toast`

## Folder Structure (excerpt)

```
components/
  layouts/
    DashboardLayout.jsx
  ui/
    Button.jsx
    Input.jsx
    Card.jsx
  Navbar.js
  Footer.js
```

## Responsiveness

- Use Tailwind responsive utilities: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, `hidden md:flex`, `px-4 sm:px-6 lg:px-8`
- Layouts flex vertically on mobile; sidebar collapses below `md`

## Visual Guidelines

- Spacing baseline: `4` (1rem). Container widths: `max-w-5xl` for content.
- Color usage: neutral backgrounds (`bg-gray-50/bg-white`), brand actions (`bg-blue-600`), alerts using `text-red-600`.

## Usage Examples

- Home: hero + CTA button; cards grid for featured courses
- SignIn/Up: use `Input` + `Button`
- Dashboards: wrap content with `DashboardLayout`

## Notes

- No business logic inside UI primitives
- Keep components controlled via props; avoid coupling to auth
