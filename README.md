# বাংলাদেশ ছাত্রলীগ — রাজশাহী বিশ্ববিদ্যালয় শাখা (Next.js + Sanity)

প্রোডাকশন-রেডি, মোবাইল-ফার্স্ট, বাংলা-ফার্স্ট ওয়েবসাইট।

## টেক স্ট্যাক
- Next.js 14+ (App Router, TypeScript)
- TailwindCSS
- shadcn/ui-inspired reusable components
- Sanity CMS + in-repo Studio route (`/studio`)
- Vercel-ready configuration

## লোকাল সেটআপ
1. Node.js 20+ ইনস্টল করুন
2. ডিপেন্ডেন্সি ইনস্টল:
   ```bash
   npm install
   ```
3. এনভায়রনমেন্ট ভ্যারিয়েবল তৈরি:
   ```bash
   cp .env.example .env.local
   ```
4. ডেভ সার্ভার চালু:
   ```bash
   npm run dev
   ```
5. ব্রাউজ করুন: `http://localhost:3000`

## Sanity সেটআপ
1. Sanity CLI দিয়ে প্রজেক্ট তৈরি/লিংক করুন:
   ```bash
   npx sanity init
   ```
2. `.env.local` এ দিন:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_READ_TOKEN` (ঐচ্ছিক)
3. Studio রান:
   ```bash
   npm run studio
   ```
4. Next app থেকে Studio: `http://localhost:3000/studio`

## কনটেন্ট এডিটিং ধাপ
1. `/studio` এ লগইন
2. `Site Settings` ডকুমেন্ট তৈরি
3. `Committee Member`, `Post`, `Event`, `Gallery Album` কনটেন্ট যোগ করুন
4. হোমপেজে স্বয়ংক্রিয়ভাবে আপডেট দেখাবে (ISR revalidate)

## Vercel Deploy (404 Fix)
`404 NOT_FOUND` এড়াতে এই প্রজেক্টে **Vercel Root Directory অবশ্যই `src`** সেট করতে হবে।

1. GitHub repo Vercel-এ import করুন
2. Project Settings → Build and Development Settings এ নিচের কনফিগ দিন:
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `src`
   - **Build Command:** `npm run build`
   - **Output Directory:** খালি রাখুন (Next.js default)
3. Environment Variables সেট করুন:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_READ_TOKEN` (optional)
4. Redeploy করুন

> Repo root-এ `vercel.json` যোগ করা হয়েছে যাতে একই build intent (`framework`, `rootDirectory`, `buildCommand`) version-controlled থাকে।

## দরকারী কমান্ড
```bash
npm run dev
npm run build
npm run lint
npm run studio
npm run studio:build
```

## নোট
- সব UI কপি বাংলায় রাখা হয়েছে
- গুগল ফর্ম embed placeholder URL `/membership` পেজে আছে
- `content-seed.md` ফাইলে নমুনা কনটেন্ট নির্দেশিকা আছে
