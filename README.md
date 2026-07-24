# Suresh Dhakal Real Estate Website

A polished, responsive Next.js website prepared for deployment to Vercel.

## Before you deploy

Open `lib/site.ts` and replace every placeholder:

- `email`
- `phoneDisplay`
- `phoneHref`
- `brokerage`
- social links
- service areas
- sample listings
- testimonials

The visible brokerage name and professional title must match the wording approved by Suresh's brokerage.

## Add Suresh's headshot

1. Add the photo as `public/suresh.jpg`.
2. Open `app/page.tsx`.
3. Find the text `Replace this card`.
4. Replace that entire placeholder card with a Next.js `<Image>` using `src="/suresh.jpg"`.

## Contact form

By default, the contact form opens the visitor's email app using the email in `lib/site.ts`.

For a hosted form:

1. Create a free Formspree form.
2. Copy its endpoint.
3. Paste it into `formspreeEndpoint` in `lib/site.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a GitHub repository and push this folder.
2. In Vercel, choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected Next.js settings and click **Deploy**.
5. In the project settings, add `sdhakal.ca` under **Domains**.
6. Update the DNS records at the company where the domain was purchased, using the values Vercel shows.

## Important listing note

The included property cards are design samples only. Replace them with Suresh's authorized listings or link to his brokerage/REALTOR.ca page. Do not copy listing content or images without permission.

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide icons

## Design v2 note

This version uses a cleaner RE/MAX-inspired red, white, blue, and black colourway. The main files to edit are:

- `lib/site.ts` for names, phone, email, brokerage, listings, testimonials, areas, and hero copy
- `app/page.tsx` for page sections and layout
- `components/Navbar.tsx` for the top navigation
- `components/ContactForm.tsx` for the inquiry form
- `app/globals.css` for global form/focus styles
