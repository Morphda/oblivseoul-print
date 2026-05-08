# oblivseoul-print

OBLIV Seoul Origin (오블리브의원 서울 오리진점) — 환자용 인쇄 자료 디자인 시스템 + reference 1-pager (Next.js 16 + Tailwind v4 + Wanted Sans).

## 정체성

**design system + 실제 동작하는 1-pager 페이지**가 한 repo에 박혀 있습니다.
Claude Design / 메디빌더 print mini-app / LLM agentic 인쇄 batch에서 **시드 reference**로 사용.

추출 출처: https://oblivseoul.kr/ (Framer raw HTML grep + 풀페이지 시각 분석, 2026-05-09)

## 구조

```
oblivseoul-print/
├── DESIGN.md                  ← brand voice + 룰 + agentic system prompt 시드
├── README.md                  ← 본 문서
├── app/
│   ├── globals.css            ← Tailwind v4 @theme + @font-face + A4 인쇄 룰
│   ├── layout.tsx
│   └── page.tsx               ← 1-pager render
├── components/
│   ├── A4Page.tsx             ← A4 portrait 210mm × 297mm 컨테이너
│   └── OblivseoulOnePager.tsx ← reference 1-pager 컴포넌트
├── lib/
│   └── tokens.ts              ← TypeScript token export (Tailwind @theme 1:1 sync)
├── public/
│   ├── fonts/
│   │   ├── WantedSansVariable.ttf       (한국 OFL, primary)
│   │   ├── PretendardVariable.ttf       (한글 fallback)
│   │   └── CormorantGaramond-Variable.ttf (라틴 디스플레이)
│   └── assets/
│       ├── oblivseoul-logo.png
│       ├── oblivseoul-hero.png
│       ├── oblivseoul-fullpage-desktop.png  ← 1440×5000 reference 캡처
│       └── (진료 영역 이미지 4)
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 빠른 시작

```bash
npm install
npm run dev      # http://localhost:3000  → 1-pager 미리보기
npm run build    # production 빌드 검증
```

PDF 빌드 (Playwright):
```bash
npm run build:pdf  # scripts/build-pdf.mjs (TODO)
```

## 핵심 design tokens (요약)

- **자간**: `-0.05em` (본문/제목 매거진 톤)
- **줄간**: `1.3` (본문) / `1.2` (제목)
- **폰트**: Wanted Sans Black 900 + SemiBold 600 위주
- **색상 베이스**: cream `#e8d9c1` / near-black `#05080c` / russet `#9d4724` / off-white `#f5f5f5`
- **페이지**: A4 portrait 210mm × 297mm

상세 — [DESIGN.md](./DESIGN.md) 참고.

## 정체성·톤

종로 niche · 자연주의 · 일본식 미니멀 · academic 매거진 톤.
**강남톱 화이트 톤이 아니다** — 어두운 hero · 우드 · 자연 소재.

## 라이선스 / 자산 출처

- 폰트: Wanted Sans (OFL 1.1, wanteddev/wanted-sans), Pretendard (OFL 1.1, orioncactus/pretendard), Cormorant Garamond (OFL 1.1)
- 자산 이미지: oblivseoul.kr (메디빌더/오블리브 자산, 내부 사용 한정)
- 코드: 메디빌더 사내 자산

## 메디빌더 컨텍스트

- Linear epic: MDB-XXX (TBD)
- 상위 미니앱 후보: `~/medibuilder/print-shop/` (별도 repo, 본 repo는 디자인 reference)
- 정합 거버넌스: `~/beamonic/Areas/Governance/skills/pdf-print.skill.md` + governance §17
