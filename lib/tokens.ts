/**
 * OBLIV Seoul Origin — Design Tokens (TypeScript export)
 * Tailwind v4 @theme 와 1:1 sync. system prompt inject 또는 LLM agentic 생성에 사용.
 *
 * 추출 출처: https://oblivseoul.kr/ (Framer raw HTML grep + 시각 분석)
 * 추출 일자: 2026-05-09
 */

export const colors = {
  cream: "#e8d9c1",
  russet: "#9d4724",
  sienna: "#7f4800",
  chocolate: "#3a2414",
  nearBlack: "#05080c",
  charcoal: "#171717",
  midCharcoal: "#484848",
  midGray: "#5b5b5b",
  warmGray: "#adabaa",
  mediumGray: "#bababa",
  lightGray: "#dbdbdb",
  offWhite: "#f5f5f5",
} as const;

export const fonts = {
  sans: '"Wanted Sans Variable", "Pretendard Variable", system-ui, sans-serif',
  display: '"Cormorant Garamond Variable", "Times New Roman", serif',
  mono: '"JetBrains Mono Variable", ui-monospace, "Courier New", monospace',
} as const;

export const tracking = {
  magazineTight: "-0.05em",
  magazineDisplay: "-0.06em",
  caption: "0em",
} as const;

export const leading = {
  magazineBody: 1.3,
  magazineHeading: 1.2,
  caption: 1.5,
} as const;

export const fontWeight = {
  /** Wanted Sans 분포 우위 — 매거진 black + semibold 톤 */
  regular: 400,
  semibold: 600,
  bold: 700,
  black: 900,
} as const;

/**
 * Brand voice — academic + 자연주의 + 메커니즘 metaphor.
 * 한자 + 외래어 병행. 격식 + 생활 밀착형. AI cliché 회피.
 */
export const brandVoice = {
  identity:
    "오블리브의원 서울 오리진점 (OBLIV Seoul Origin) — 서울 종로 피부·발톱·재활 통합 의료 클리닉. 피부건축학 기반 맞춤 솔루션.",
  signature: [
    "피부건축학을 토대로 완성되는 토탈 웰니스 솔루션",
    "발톱 문제는 발만의 문제가 아닙니다",
    "몸의 근본(Origin)부터 바로 세웁니다",
    "3박자 자가 회복 메커니즘",
    "복합치료로 근본적인 통증 개선",
  ],
  bannedClichés: [
    "근본부터", "시작점에서", "함께 풀어냅니다",
    "다져온", "쌓아온", "정성을 담아", "한 분 한 분",
    "잘 보고 시작하겠습니다",
  ],
} as const;

export const orgInfo = {
  nameKo: "오블리브의원 서울 오리진점",
  nameEn: "OBLIV Seoul Origin",
  address: "서울특별시 종로구 청계천로 93 파고다타워 5층",
  postalCode: "03170",
  phone: "+82-2-6956-3438",
  phoneDisplay: "02-6956-3438",
  url: "https://oblivseoul.kr",
  domains: ["피부", "발톱", "재활"] as const,
} as const;
