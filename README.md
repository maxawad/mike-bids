# AutoBid Competitor (mike-bids)

A small web page with a deposit and bidding limit calculator. You enter how much you would deposit and how much you want to bid, and it shows your bidding limit and how much more you would need to deposit to reach the bid you want.

## What it does

- Bidding limit is 10 times the deposit amount.
- If your desired bid is above that limit, it tells you the extra deposit needed (desired bid divided by 10, minus your deposit).
- You can pick a payment method label (credit card or crypto) and press "Confirm Deposit" to see a confirmation message.
- This is a front-end mock-up only. No payment is taken, nothing is sent to a server and there is no backend or database.

## Tech stack

- Next.js 15 (App Router) with React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Run it locally

You need Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000 and press "Show Calculator".

## Build a static demo

The project is configured to export plain static files, so it can be hosted on any static host (GitHub Pages, Netlify, Vercel, S3 and so on). No secrets or API keys are needed.

```bash
npm install
npm run build
```

The static site is written to the `out/` folder. Serve it with any static server, for example:

```bash
npx serve out
```

Note: the build downloads the Geist fonts from Google Fonts through `next/font`, so it needs internet access.

## Status

Prototype. The calculator works, but it is a demo of an idea and not a real bidding or payments product.

## Project layout

- `src/app/page.tsx`: home page with the show/hide button
- `src/app/components/DepositCalculator.tsx`: the calculator component
- `src/app/layout.tsx`: page title, fonts and layout

## Credits

Bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Fonts are [Geist](https://vercel.com/font) by Vercel.
