# DESIGN.md — OBLIV Seoul Origin 인쇄 디자인 시스템

> 추출 출처: https://oblivseoul.kr/ (Framer raw HTML grep + 풀페이지 시각 분석)
> 추출 일자: 2026-05-09
> 용도: Claude Design / 메디빌더 print mini-app / LLM agentic 1-pager·카탈로그 batch generation
> 패턴 참고: VoltAgent/awesome-design-md, pbakaus/impeccable, bitjaru/styleseed

---

## 1. 브랜드 정체성

**오블리브의원 서울 오리진점 (OBLIV Seoul Origin)**
서울 종로 청계천로 93 파고다타워 5층 — 피부·발톱·재활 통합 의료 클리닉.
**피부건축학** 기반 맞춤 솔루션.

### 톤 한 줄

종로 niche · 자연주의 · 일본식 미니멀 · academic · 매거진 톤.
**강남톱 화이트 톤이 아니다.** 어두운 hero · 우드 · 자연 소재 · 격자 천장.

---

## 2. 색상 팔레트

| 토큰 | hex | 역할 |
|---|---|---|
| `--color-cream` | `#e8d9c1` | 베이지/크림 액센트 (identity strip 배경) |
| `--color-russet` | `#9d4724` | 러스트 (강조·numeral) |
| `--color-sienna` | `#7f4800` | 시에나 브라운 (보조 강조) |
| `--color-chocolate` | `#3a2414` | 다크 초콜릿 |
| `--color-near-black` | `#05080c` | 본문 텍스트 / footer 배경 |
| `--color-charcoal` | `#171717` | 다크 차콜 |
| `--color-mid-charcoal` | `#484848` | 본문 보조 |
| `--color-mid-gray` | `#5b5b5b` | 캡션 |
| `--color-warm-gray` | `#adabaa` | border / footer 보조 텍스트 |
| `--color-medium-gray` | `#bababa` | 구분선 |
| `--color-light-gray` | `#dbdbdb` | placeholder 배경 |
| `--color-off-white` | `#f5f5f5` | 페이지 베이스 |

배경 우선 = `cream` 또는 `off-white`. 어두운 hero는 `near-black` overlay.

---

## 3. 타이포그래피

### 폰트
- **본문·제목**: Wanted Sans Variable (한국 OFL — wanteddev/wanted-sans v1.0.3) — `Black 900` + `SemiBold 600` 매거진 톤
- **한글 fallback**: Pretendard Variable (orioncactus/pretendard 1.0)
- **디스플레이/이탤릭**: Cormorant Garamond Variable (라틴) — 영문 부제·numeral 강조
- **모노 액센트**: Fragment Mono (특정 키워드/번호)

self-host 필수 (CDN 금지). `public/fonts/` 에 `.ttf` Variable.

### 자간 (tracking) — oblivseoul 매거진 톤 압축

- 본문/제목 표준: **`-0.05em`** (raw HTML grep 12회 우위)
- 큰 디스플레이: `-0.06em`
- 캡션/모노: `0`

### 줄간 (leading)
- 본문: **1.3** (raw HTML 12회 우위)
- 제목: 1.2
- 캡션: 1.5

### 폰트 weight 분포 (oblivseoul raw)
- Black 900: 138회
- SemiBold 600: 131회
- Regular 400: 17회
- Bold 700: 14-15회

→ **Black + SemiBold 우위**가 매거진 톤 핵심. body 라이트는 Regular 400 절제.

---

## 4. 브랜드 voice · 톤

### 카피 톤
- **academic + 자연주의 + 메커니즘 metaphor**
- 한자(근본·자가 회복·통합·메커니즘) + 외래어(Origin·웰니스) **병행**
- 격식 + 생활 밀착형

### 대표 시그니처 카피 (실제 oblivseoul 인용)
1. "피부건축학을 토대로 완성되는 토탈 웰니스 솔루션"
2. "발톱 문제는 발만의 문제가 아닙니다"
3. "몸의 근본(Origin)부터 바로 세웁니다"
4. "3박자 자가 회복 메커니즘"
5. "복합치료로 근본적인 통증 개선"

### 금지 카피 (회피)
- AI cliché: 근본부터 / 시작점에서 / 함께 풀어냅니다 / 다져온 / 쌓아온 / 정성을 담아 / 한 분 한 분 / 잘 보고 시작
- 의료법 §56 위반: 최고 / 최상 / 유일한 / 최초 / 100% / 완치 / 부작용 없음 / 비교광고
- 영문 부제 + 한국어 동어 반복 (예: "DERMATOLOGIST · 피부과 전문의")

### 영문/한글 병기 룰
- ✅ 영문 부제 한 줄 + 한국어 직책 한 줄 (분리)
- ✅ 한국어만 / 영문만 단독
- ❌ "Origin — 시작점에서 다시" 식 동의 반복

---

## 5. 레이아웃 패턴

### 1-pager A4 portrait 표준 구조

```
┌─────────────────────────────────────┐
│ HERO (118mm)                        │
│  - 어두운 사진 full bleed           │
│  - 위 그라디언트 (cream→transparent)│
│  - top header (logo + wordmark + TEL)│
│  - bottom Cormorant italic + Wanted Black 디스플레이 │
├─────────────────────────────────────┤
│ IDENTITY STRIP (45mm)               │
│  - cream 배경                       │
│  - Cormorant italic 영문 부제 + 한글 헤드 + 본문 │
├─────────────────────────────────────┤
│ SERVICES 3-column (90mm)            │
│  - 피부 / 발톱 / 재활               │
│  - 사진 4:3 + numeral + 영문 + 한글 │
├─────────────────────────────────────┤
│ FOOTER (35mm) — near-black 배경      │
│  - 의원명 / 주소 / 면책             │
└─────────────────────────────────────┘
210mm × 297mm A4 portrait
```

### 그리드
- desktop max-width: 1440px (web reference)
- A4 padding: 14mm 좌우, 6-12mm 상하
- 3-column gap: 5mm

### 사진 룰
- hero: cover + `objectPosition: "center 35%"` (얼굴/포커스 위쪽 보존)
- service card: 4:3 비율, cover, `saturate(0.9) brightness(0.95)` (자연주의 톤)

---

## 6. 인쇄 컴플라이언스

- 의료법 §56 사전심의 대상 — 출판 전 KIAF/대한의사협회 사전심의 통과 필수
- 심의필 번호 + 유효기간 footer 표기 (이 1-pager는 reference, 실 발주 시 추가)
- 환자 emotional 영역 (후기·의사 메시지)은 **인간 작성 유지**, AI 자동화 금지

---

## 7. agentic 사용 가이드 (LLM에 inject할 시스템 프롬프트 핵심)

```
당신은 oblivseoul-print 디자인 시스템을 따라 의원 인쇄 자료를 생성한다.

[hard 룰]
- 자간: -0.05em (본문/제목), -0.06em (디스플레이), 0 (캡션)
- 줄간: 1.3 (본문), 1.2 (제목), 1.5 (캡션)
- 폰트: Wanted Sans Variable (Black 900 + SemiBold 600 위주) + Cormorant Garamond Italic (영문 부제) + Pretendard Variable (fallback)
- 색상: cream (#e8d9c1) 베이스 / near-black (#05080c) 텍스트 / russet (#9d4724) 강조 / off-white (#f5f5f5) 페이지 베이스
- A4 portrait 210mm × 297mm
- word-break: keep-all (한글 줄바꿈)
- 사진: hero cover + objectPosition center 35%, service card 4:3 비율
- 톤: 종로 niche · 자연주의 · 일본식 미니멀 · academic 매거진 톤

[금지]
- AI cliché (근본부터·함께 풀어냅니다·다져온·정성을 담아)
- 의료법 §56 위반 (최고·최상·유일·100%·완치)
- 영문 부제 + 한국어 동어 반복
- 환자 emotional 영역 자동 생성 (후기·의사 메시지)
- 강남톱 화이트 톤 채택

[참고]
- reference 1-pager: components/OblivseoulOnePager.tsx
- token: lib/tokens.ts (TypeScript export, Tailwind v4 @theme 와 1:1 sync)
- 자산: public/assets/ (logo, hero, 진료 영역 이미지)
- 폰트: public/fonts/
```
