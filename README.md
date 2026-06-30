# The Dream Casa

Premium interior design firm website — built with Next.js for SEO.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Firebase Deployment

### Prerequisites

1. [Firebase account](https://console.firebase.google.com/)
2. [Node.js](https://nodejs.org/) 18+
3. Firebase CLI: `npm install -g firebase-tools`
4. Login: `firebase login`

### Steps

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Update `.firebaserc` with your project ID
3. Enable **Firebase App Hosting** (recommended for Next.js SSR/SEO)
4. Deploy:

```bash
firebase experiments:enable webframeworks
firebase init hosting
firebase deploy
```

### Custom Domain

1. Firebase Console → Hosting → **Add custom domain**
2. Enter your domain (e.g. `thedreamcasa.com`)
3. Add the DNS records Firebase provides (A/CNAME/TXT) at your domain registrar
4. Wait for SSL certificate provisioning (can take up to 24 hours)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Firebase Hosting
