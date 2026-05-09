import A4Page from "./A4Page";
import { orgInfo } from "@/lib/tokens";

/**
 * OBLIV Seoul Origin — 환자용 인쇄 1-pager (A4 portrait)
 *
 * 정합:
 * - oblivseoul 매거진 톤 (cream + near-black + russet, Cormorant italic display)
 * - Apple HIG typography (본문 Regular 400 / 제목 SemiBold 600 / 큰 디스플레이 Bold 700, Black 900 절제)
 * - Apple HIG layout (white space hierarchy, 8pt grid, deference to content)
 * - restrained typography: font family 2개 (Wanted Sans + Cormorant), size 단계 4개
 */
export default function OblivseoulOnePager() {
  return (
    <A4Page>
      {/* ───────────── HERO ───────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "120mm" }}
      >
        <img
          src="/assets/oblivseoul-hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 35%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,8,12,0.5) 0%, rgba(5,8,12,0.1) 30%, rgba(5,8,12,0.78) 100%)",
          }}
        />

        {/* Top header */}
        <header
          className="absolute left-0 right-0 top-0 flex items-center justify-between"
          style={{ padding: "8mm 12mm" }}
        >
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/oblivseoul-logo.png"
              alt="OBLIV"
              className="h-5 w-5 object-contain"
              style={{ filter: "invert(1) brightness(2)", opacity: 0.92 }}
            />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "9.5pt",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(232, 217, 193, 0.92)",
              }}
            >
              OBLIV Seoul Origin
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "8.5pt",
              letterSpacing: "0.05em",
              color: "rgba(232, 217, 193, 0.7)",
              fontWeight: 400,
            }}
          >
            TEL {orgInfo.phoneDisplay}
          </span>
        </header>

        {/* Hero copy */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ padding: "0 14mm 18mm" }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "12pt",
              letterSpacing: "0",
              color: "rgba(232, 217, 193, 0.62)",
              fontWeight: 400,
              marginBottom: "6mm",
            }}
          >
            The Architecture of Skin
          </p>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "32pt",
              letterSpacing: "-0.04em",
              lineHeight: 1.18,
              color: "var(--color-cream)",
            }}
          >
            몸의 근본
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "34pt",
                letterSpacing: "-0.02em",
                margin: "0 0.08em",
              }}
            >
              Origin
            </span>
            부터<br />바로 세웁니다.
          </h1>
        </div>
      </section>

      {/* ───────────── IDENTITY STRIP ───────────── */}
      <section
        style={{
          background: "var(--color-cream)",
          padding: "14mm 14mm 12mm",
        }}
      >
        <div className="flex items-baseline gap-4" style={{ marginBottom: "5mm" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "10.5pt",
              color: "var(--color-russet)",
              letterSpacing: "0.01em",
            }}
          >
            Integrated Wellness
          </span>
          <span
            style={{
              flex: 1,
              borderTop: "0.5px solid var(--color-warm-gray)",
              opacity: 0.4,
              transform: "translateY(-3px)",
            }}
          />
        </div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "16pt",
            color: "var(--color-near-black)",
            letterSpacing: "-0.03em",
            lineHeight: 1.35,
            marginBottom: "5mm",
            maxWidth: "150mm",
          }}
        >
          피부건축학 기반의 통합 의료,<br />
          3박자 자가 회복 메커니즘.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "9.5pt",
            color: "var(--color-mid-charcoal)",
            letterSpacing: "-0.012em",
            lineHeight: 1.65,
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
          padding: "12mm 14mm 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "6mm",
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
        className="absolute left-0 right-0 bottom-0"
        style={{
          background: "var(--color-near-black)",
          padding: "9mm 14mm",
        }}
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "8.5pt",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--color-cream)",
                marginBottom: "2mm",
              }}
            >
              OBLIV Seoul Origin
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "8pt",
                color: "rgba(173, 171, 170, 0.85)",
                letterSpacing: "-0.005em",
                lineHeight: 1.6,
              }}
            >
              {orgInfo.address}<br />
              TEL {orgInfo.phoneDisplay} · {orgInfo.url}
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "6.5pt",
              color: "rgba(173, 171, 170, 0.55)",
              letterSpacing: "0.04em",
              maxWidth: "65mm",
              textAlign: "right",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {orgInfo.url}
          </p>
        </div>
      </footer>
    </A4Page>
  );
}

/* ===================================================================
 * 진료 영역 카드
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
        display: "flex",
        flexDirection: "column",
        gap: "3.5mm",
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
            filter: "saturate(0.92) brightness(0.97)",
          }}
        />
      </div>

      <div className="flex items-baseline gap-2.5">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "7.5pt",
            color: "var(--color-russet)",
            letterSpacing: "0.06em",
            fontWeight: 400,
          }}
        >
          {numeral}
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "10pt",
            color: "var(--color-mid-charcoal)",
            letterSpacing: "0.005em",
          }}
        >
          {english}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: "13pt",
          color: "var(--color-near-black)",
          letterSpacing: "-0.03em",
          lineHeight: 1.25,
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
          letterSpacing: "-0.005em",
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {desc}
      </p>
    </article>
  );
}
