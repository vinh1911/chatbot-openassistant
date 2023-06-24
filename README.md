Hello, I created the assignment utilizing the following library/frameworks which tremendously help with the development process:

- Next.js 13
- Tailwindcss for faster styling (cleaner if you use Tailwind Fold in VSC)
- Vercel's new AI SDK which make streaming response from server much easier
- @huggingface/inference + OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5 model

## Known issue / future enhancement:

- The input doesn't support Shift + Enter
- The model sometime confuse and doesn't reponse (not API rate limit)
- Normal single block response when using regenerate response (not streaming response)
- ...
- No tests xD

## Deployed on Vercel

https://mayo-zalo-assignment.vercel.app/

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
