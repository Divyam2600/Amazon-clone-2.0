# Amazon Clone 2.0

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue?cacheSeconds=2592000" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow" />
  <img alt="Amazon Clone 2.0" src="https://img.shields.io/badge/Amazon-Clone%202.0-blue" />
  <a href="https://clipchamp.com/watch/ix93z97k9Wb?utm_source=embed&utm_medium=embed&utm_campaign=watch">
    <img alt="Template Video" src="https://img.shields.io/badge/Template-Video-brightgreen" />
  </a>
</p>

### About The Build

Amazon 2.0 is one which fetches products data from FakeStore Api and has Slick Animations, Eye-Catching UI, Toast notifications, Stripe Payment Integration and many more. However, the Stripe webhook passes 500 Err code(Internal Server Error) which prevented the implementation of the Order Page Logic and integration of Firebase Database.

<p>
  Click Template Video above to view the demo of the build.
</p>

![Template Screenshot](TemplateScreenshot.png?raw=true "Template Screenshot")

## Next.js + Tailwind CSS

Next.js is a React Production Framework which gives the best developer experience with all the features for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

## How To Start

### Start with a pre-made Starter Template

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example with a pre-configured starter template of NextJs App with TailwindCSS:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

### Now finally run your Project

Run your build process with `npm run dev` or whatever command is configured in your `package.json` file.

```bash
npm run dev
```

## Environment variables

Open or create a `.env` file then edit add this setting

```
SKIP_PREFLIGHT_CHECK=true

# Authentication
GOOGLE_ID=key_goes_here
GOOGLE_SECRET=key_goes_here
NEXTAUTH_URL=http://localhost:3000

# Stripe
STRIPE_PUBLIC_KEY=key_goes_here
STRIPE_SECRET_KEY=key_goes_here

# Stripe Terminal/CLI
STRIPE_SIGNING_SECRET=key_goes_here

HOST=http://localhost:3000

# Need to add this to... google cloud
# http://localhost:3000/api/auth/callback/google
```

## Author

👤 **Divyam Agarwal**

- Website: [https://divyamag.vercel.app/](https://divyamag.vercel.app/)
- Github: [@Divyam2600](https://github.com/Divyam2600)

## Show your support

Give a ⭐️ if this project helped you!
