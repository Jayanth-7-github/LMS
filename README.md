# LMS Project

A full-stack Learning Management System built using Next.js (App Router), MongoDB (Mongoose), Tailwind CSS, and NextAuth.js. Language: JavaScript.

## Goals

- Students register, enroll in courses, access lessons, track progress
- Admins manage content and users

## Features

- Authentication with NextAuth.js (JWT sessions)
- Student and Admin dashboards
- Responsive, modular UI with Tailwind

## Tech Stack

- Framework: Next.js (App Router, JavaScript)
- Database: MongoDB via Mongoose
- Authentication: NextAuth.js
- Styling: Tailwind CSS

## Project Structure

- `app/` – routes (e.g., `/signin`, `/dashboard`)
- `app/api/auth/[...nextauth]/route.js` – NextAuth handler
- `components/` – reusable UI (`Navbar`, `CourseCard`)

## Setup

```bash
npm install
npm run dev
```

## Environment

Create `.env.local` with:

```
NEXTAUTH_SECRET=replace-with-strong-random-string
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority
```

## Next Steps

- Connect Credentials authorize() to MongoDB with Mongoose
- Add role-based dashboards and course management flows
