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
npm run check
```

## Vercel 배포 설정 (Next.js 기준)
1. Git 저장소를 Vercel에 Import 합니다.
2. Framework Preset은 **Next.js**를 선택합니다. (`vercel.json`도 nextjs로 고정)
3. Build Command는 `next build`, Output Directory는 `.next`(자동 감지)를 사용합니다.
4. Node.js 버전은 `20.x` 이상으로 설정합니다. (`package.json > engines.node >=20.11`)
5. 배포 후 Production URL을 `src/data/profile.ts`의 `siteUrl`에 반영하면 메타데이터/OG URL이 실제 도메인과 일치합니다.

## Vercel 배포 전 체크리스트
```bash
npm run lint
npm run typecheck
npm run build
```

## 콘텐츠 업데이트 방법
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
