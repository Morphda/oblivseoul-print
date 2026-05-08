import A4Page from "./A4Page";
import { orgInfo } from "@/lib/tokens";

/**
 * OBLIV Seoul Origin — 환자용 인쇄 1-pager (A4 portrait)
 *
 * 추출 design tokens 기반 reference 컴포넌트.
 * 매거진 톤 (-0.05em tracking, 1.3em leading, Wanted Sans Black + Cormorant Italic display).
 * 종로 niche · 자연주의 · 일본식 미니멀.
 */
export default function OblivseoulOnePager() {
  return (
    <A4Page className="bg-off-white">
      {/* ───────────── HERO ───────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "118mm" }}
      >
        <img
          src="/assets/oblivseoul-hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 35%" }}
        />
        {/* 어두운 그라디언트 — bottom 카피 가독성 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,8,12,0.45) 0%, rgba(5,8,12,0.15) 35%, rgba(5,8,12,0.85) 100%)",
          }}
        />

        {/* Top header strip */}
        <header
          className="absolute left-0 right-0 top-0 flex items-center justify-between"
          style={{ padding: "6mm 8mm" }}
        >
          <div className="flex items-center gap-2">
            <img
              src="/assets/oblivseoul-logo.png"
              alt="OBLIV Seoul logo"
              className="h-6 w-6 object-contain"
              style={{ filter: "invert(1) brightness(2)" }}
            />
            <span
              className="text-cream"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 900,
                fontSize: "10pt",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              OBLIV Seoul Origin
            </span>
          </div>
          <span
            className="text-cream/80"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9pt",
              letterSpacing: "0.04em",
            }}
          >
            TEL {orgInfo.phoneDisplay}
          </span>
        </header>

        {/* Hero copy — Cormorant Italic display + Wanted Sans Black */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ padding: "0 14mm 16mm" }}
        >
          <p
            className="text-cream/70 mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "13pt",
              letterSpacing: "-0.02em",
            }}
          >
            The Architecture of Skin · 피부건축학
          </p>
          <h1
            className="text-cream"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 900,
              fontSize: "44pt",
              letterSpacing: "-0.06em",
              lineHeight: 1.05,
            }}
          >
            몸의 근본
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 500,
                color: "var(--color-cream)",
              }}
            >
              {" "}Origin{" "}
            </span>
            부터<br />바로 세웁니다.
          </h1>
        </div>
      </section>

      {/* ───────────── IDENTITY STRIP ───────────── */}
      <section
        className="bg-cream"
        style={{ padding: "11mm 14mm 9mm" }}
      >
        <div className="flex items-baseline gap-3 mb-2">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "11pt",
              color: "var(--color-russet)",
              letterSpacing: "-0.02em",
            }}
          >
            Integrated Wellness
          </span>
          <span
            style={{
              flex: 1,
              borderTop: "1px solid var(--color-warm-gray)",
              opacity: 0.5,
            }}
          />
        </div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 900,
            fontSize: "20pt",
            color: "var(--color-near-black)",
            letterSpacing: "-0.05em",
            lineHeight: 1.2,
            marginBottom: "3mm",
          }}
        >
          피부건축학 기반의 통합 의료, <br />
          3박자 자가 회복 메커니즘.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "9.5pt",
            color: "var(--color-mid-charcoal)",
            letterSpacing: "-0.025em",
            lineHeight: 1.55,
            maxWidth: "165mm",
          }}
        >
          오블리브 서울 오리진점은 피부·발톱·재활을 한 자리에서 다룹니다.
          단발성 처치가 아닌 몸 전체의 회복 매커니즘에 맞춰 진료 단계를 설계합니다.
        </p>
      </section>

      {/* ───────────── 진료 3-column ───────────── */}
      <section
        style={{
          padding: "9mm 14mm 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5mm",
        }}
      >
        <ServiceCard
          numeral="01"
          english="Skin"
          korean="피부"
          desc="피부건축학을 토대로 완성되는 토탈 웰니스 솔루션."
          image="/assets/H2On2SDpMMFwT7knjmyFVyc4MQg.png"
        />
        <ServiceCard
          numeral="02"
          english="Toenail"
          korean="발톱"
          desc="발톱 문제는 발만의 문제가 아닙니다. 자세·하중·순환까지."
          image="/assets/OHMqQzJL603OV2vf4qN7UjR2ujQ.png"
        />
        <ServiceCard
          numeral="03"
          english="Rehab"
          korean="재활"
          desc="복합치료로 근본적인 통증 개선. 자가 회복 매커니즘 회복."
          image="/assets/z2EPXfzQo8OyNZdL1z0vSsziRc.png"
        />
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer
        className="absolute left-0 right-0 bottom-0 bg-near-black text-cream"
        style={{ padding: "7mm 14mm" }}
      >
        <div className="flex items-end justify-between">
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 900,
                fontSize: "9pt",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-cream)",
                marginBottom: "1.5mm",
              }}
            >
              OBLIV Seoul Origin
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "8.5pt",
                color: "var(--color-warm-gray)",
                letterSpacing: "-0.02em",
                lineHeight: 1.5,
              }}
            >
              {orgInfo.address}<br />
              TEL {orgInfo.phoneDisplay} · {orgInfo.url}
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "7pt",
              color: "var(--color-warm-gray)",
              letterSpacing: "0.04em",
              maxWidth: "70mm",
              textAlign: "right",
              lineHeight: 1.5,
            }}
          >
            본 자료는 의료 정보 안내를 위한 자료이며,<br />
            진료 결과는 개인차가 있을 수 있습니다.
          </p>
        </div>
      </footer>
    </A4Page>
  );
}

/* ===================================================================
 * 진료 영역 카드 — 3-column grid 셀
 * =================================================================== */
function ServiceCard({
  numeral,
  english,
  korean,
  desc,
  image,
}: {
  numeral: string;
  english: string;
  korean: string;
  desc: string;
  image: string;
}) {
  return (
    <article
      style={{
        background: "var(--color-off-white)",
        border: "1px solid var(--color-warm-gray)",
        borderColor: "rgba(173,171,170,0.4)",
        padding: "5mm",
        display: "flex",
        flexDirection: "column",
        gap: "3mm",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          background: "var(--color-light-gray)",
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "saturate(0.9) brightness(0.95)",
          }}
        />
      </div>

      <div className="flex items-baseline gap-2">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "8pt",
            color: "var(--color-russet)",
            letterSpacing: "0.05em",
          }}
        >
          {numeral}
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "10pt",
            color: "var(--color-mid-charcoal)",
            letterSpacing: "-0.02em",
          }}
        >
          {english}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 900,
          fontSize: "16pt",
          color: "var(--color-near-black)",
          letterSpacing: "-0.05em",
          lineHeight: 1.15,
        }}
      >
        {korean}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: "8pt",
          color: "var(--color-mid-charcoal)",
          letterSpacing: "-0.025em",
          lineHeight: 1.55,
          flex: 1,
        }}
      >
        {desc}
      </p>
    </article>
  );
}
