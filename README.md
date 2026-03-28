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

## Build (Vercel과 동일 검증)
```bash
npm run lint
npm run build
```

## Vercel 배포 가이드
1. Git 저장소를 Vercel에 Import 합니다.
2. Framework Preset은 **Next.js** 를 선택합니다.
3. Build Command는 `next build`, Output은 `.next`(자동 감지)를 사용합니다.
4. Environment Variables가 있다면 Project Settings > Environment Variables에 등록합니다.
5. 배포 후 Production URL을 `src/data/profile.ts`의 `siteUrl`에 반영하면 메타데이터/OG URL이 실제 도메인과 일치합니다.

`vercel.json`은 Next.js 프레임워크 지정만 유지해 기본 배포 플로우를 따릅니다.

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
