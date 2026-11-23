# OneCart

OneCart is a MERN e-commerce app (MongoDB, Express, React, Node) for clothing and accessories for men, women and kids. It is a learning project built with production-style practices.

## Status

Working now:
- Home page with a full-width hero, a spotlight section, category tiles and a newsletter form.
- Collections page with category chips and a search chip. It shows an empty state, because there is no product API yet.
- About page with an intro, principles, how it works and a short story section.
- Registration and login with email and password, and Google sign-in.
- Logged-in session kept in an httpOnly cookie, with a menu that shows the user's name and Logout.
- Smooth page transitions. The menu and footer stay put and only the page fades in.

Not built yet: product API and product pages, cart, orders, admin panel, Contact page (it shows a "coming soon" page), and the newsletter backend.

## Tech stack

- Backend: Express 5, Mongoose 9, JWT in an httpOnly cookie, bcrypt, `firebase-admin` (verifies Google sign-in tokens).
- Frontend: React 19, Vite, Tailwind CSS v4, react-router-dom v7, react-icons, Firebase (Google sign-in only).
- Design: "Editorial Noir" (EB Garamond headlines, Hanken Grotesk body, warm brown accent). Colors, fonts and text sizes are theme tokens in `frontend/src/index.css`.

## Project layout

```
backend/    Express API: config/, controller/, model/, routes/, middleware/
frontend/   React app (see below)
admin/      Reserved for the admin panel (empty for now)
```

Frontend `src/` folders:
- `pages/` one file per route
- `components/` shared UI (`home/` holds home page sections only)
- `context/` and `hooks/` global state, such as the logged-in user
- `services/` one file per backend resource
- `config/` app setup: `api.js` is the only file that calls `fetch`, `categories.js`, `navLinks.js`, `homeContent.js`
- `assets/` small optimized images

Data flows one way: component, then hook, then context, then service, then `request()` in `config/api.js`, then the backend.

## Setup

You need Node.js and a MongoDB database (for example MongoDB Atlas). Google sign-in also needs a Firebase project.

1. Install packages in both folders:
   ```
   cd backend && npm install
   cd ../frontend && npm install
   ```
2. Copy `backend/.env.example` to `backend/.env` and `frontend/.env.example` to `frontend/.env`, then fill in the values. The `.env` files are never committed.
3. Start the backend: `cd backend && npm run dev`
4. Start the frontend: `cd frontend && npm run dev`

Environment variable names:
- `backend/.env`: `PORT`, `MONGODB_URL`, `JWT_SECRET`, `FIREBASE_PROJECT_ID`, `CLOUDINARY_URL` (for image uploads later)
- `frontend/.env`: `VITE_API_URL` and the `VITE_FIREBASE_*` settings. Only put public values in `VITE_` variables, because they end up in the browser bundle.

## API

Auth endpoints, all under `/api/auth`:
- `POST /registration` create an account
- `POST /login` log in with email and password
- `POST /google` log in with a Google (Firebase) ID token
- `POST /logout` log out
- `GET /me` return the current user (needs login)

Responses use `{ message }` for errors and `{ message, data }` for success. The password hash is never returned.

## Checks before you finish a change

In `frontend/`, run `npm run lint` and `npm run build`. Both must pass with zero errors. For backend changes, start the server and confirm it connects to MongoDB.

## Deploying

- Set `NODE_ENV=production` on the server. This turns on secure cookies and hides error details.
- If the frontend and backend are on different domains, cookies need `sameSite: "none"` with `secure: true`, and CORS must allow the exact frontend address.
- Set `VITE_API_URL` and the `VITE_FIREBASE_*` values at build time. There is no localhost fallback in production.
- The frontend is a single-page app, so the host must send every unknown path to `index.html`. Otherwise refreshing `/login` returns a 404.
