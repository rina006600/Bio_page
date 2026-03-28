# Bio Page (Next.js + Vercel Ready)

디자인 마케터를 위한 **개인 브랜딩 + 포트폴리오 + 링크 허브** 웹사이트입니다.

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Vercel 배포 대응

## Run
```bash
npm install
npm run dev
```

## Build (Vercel 동일)
```bash
npm run build
```

## 콘텐츠 업데이트 방법 (Codex-friendly)
콘텐츠는 아래 데이터 파일만 수정하면 됩니다.
- `src/data/profile.ts`
- `src/data/links.ts`
- `src/data/strengths.ts`
- `src/data/projects.ts`
- `src/data/experience.ts`
- `src/data/contact.ts`

## SEO 구현 내용
- Dynamic metadata (`generateMetadata`)
- Open Graph
- JSON-LD (`Person`, `ProfilePage`)
- Semantic section structure
