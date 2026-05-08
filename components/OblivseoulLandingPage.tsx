import { orgInfo } from "@/lib/tokens";

/**
 * OBLIV Seoul Origin — 웹 랜딩페이지
 *
 * single-source 정합:
 * - lib/tokens.ts brand voice / signature 카피 / 진료 영역 reuse
 * - design tokens (색상·폰트·자간·줄간) 동일하지만 web grammar 적용
 *
 * web grammar:
 * - line-height 1.6-1.7 (Apple HIG 본문 1.5-1.6 정합)
 * - body font-size 16-18px
 * - bento grid 2026 trend (Apple keynote modular grid 디지털 후예)
 * - scroll storytelling (Hero → 시술 → 정체성 → 의료진 → 위치 → CTA → Footer)
 * - hover/transition 인터랙션
 */
export default function OblivseoulLandingPage() {
  return (
    <div
      style={{
        background: "var(--color-off-white)",
        minHeight: "100vh",
        fontSize: "16px",
        lineHeight: 1.7,
        letterSpacing: "-0.012em",
      }}
    >
      {/* ───────────── TOP NAV (sticky) ───────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(245, 245, 245, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(173, 171, 170, 0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="/assets/oblivseoul-logo.png"
              alt="OBLIV"
              style={{ width: "22px", height: "22px", objectFit: "contain" }}
            />
            <span
              style={{
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-near-black)",
              }}
            >
              OBLIV Seoul Origin
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <a href="#services" style={navLinkStyle}>진료</a>
            <a href="#identity" style={navLinkStyle}>오리진</a>
            <a href="#location" style={navLinkStyle}>오시는 길</a>
            <a
              href={`tel:${orgInfo.phone}`}
              style={{
                ...navLinkStyle,
                background: "var(--color-near-black)",
                color: "var(--color-cream)",
                padding: "8px 18px",
                borderRadius: "100px",
                fontWeight: 500,
              }}
            >
              예약 · {orgInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </nav>

      {/* ───────────── HERO ───────────── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "min(720px, 85vh)",
          overflow: "hidden",
        }}
      >
        <img
          src="/assets/oblivseoul-hero.png"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 35%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(5,8,12,0.5) 0%, rgba(5,8,12,0.1) 30%, rgba(5,8,12,0.78) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0 32px 80px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "20px",
              fontWeight: 400,
              color: "rgba(232, 217, 193, 0.62)",
              marginBottom: "16px",
              letterSpacing: "0",
            }}
          >
            The Architecture of Skin
          </p>
          <h1
            style={{
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 76px)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--color-cream)",
              maxWidth: "900px",
            }}
          >
            몸의 근본
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
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
        id="identity"
        style={{
          background: "var(--color-cream)",
          padding: "96px 32px",
        }}
      >
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "18px",
              fontWeight: 400,
              color: "var(--color-russet)",
              letterSpacing: "0.01em",
              marginBottom: "20px",
            }}
          >
            Integrated Wellness
          </p>
          <h2
            style={{
              fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-near-black)",
              letterSpacing: "-0.03em",
              lineHeight: 1.3,
              marginBottom: "28px",
            }}
          >
            피부건축학 기반의 통합 의료,<br />
            3박자 자가 회복 메커니즘.
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: "var(--color-mid-charcoal)",
              fontWeight: 400,
              maxWidth: "720px",
            }}
          >
            오블리브 서울 오리진점은 피부·발톱·재활을 한 자리에서 다룹니다.
            단발성 처치가 아닌 몸 전체의 회복 매커니즘에 맞춰 진료 단계를 설계합니다.
            의료진과 시설은 환자가 안심하고 머무를 수 있는 환경을 우선합니다.
          </p>
        </div>
      </section>

      {/* ───────────── SERVICES BENTO ───────────── */}
      <section
        id="services"
        style={{
          padding: "120px 32px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "56px", maxWidth: "640px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--color-russet)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "12px",
              fontWeight: 400,
            }}
          >
            Services
          </p>
          <h2
            style={{
              fontWeight: 600,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              color: "var(--color-near-black)",
              letterSpacing: "-0.035em",
              lineHeight: 1.2,
            }}
          >
            한 자리에서, 한 사람을 위해.
          </h2>
        </div>

        {/* Bento Grid — 3-column asymmetric */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "16px",
          }}
        >
          <BentoCard
            numeral="01"
            english="Skin"
            korean="피부"
            desc="피부건축학을 토대로 완성되는 토탈 웰니스 솔루션. 표면이 아닌 구조에 답이 있습니다."
            image="/assets/H2On2SDpMMFwT7knjmyFVyc4MQg.png"
            spanRows={2}
          />
          <BentoCard
            numeral="02"
            english="Toenail"
            korean="발톱"
            desc="발톱 문제는 발만의 문제가 아닙니다. 자세·하중·순환까지."
            image="/assets/OHMqQzJL603OV2vf4qN7UjR2ujQ.png"
          />
          <BentoCard
            numeral="03"
            english="Rehab"
            korean="재활"
            desc="복합치료로 근본적인 통증 개선. 자가 회복 매커니즘 회복."
            image="/assets/z2EPXfzQo8OyNZdL1z0vSsziRc.png"
          />
          <BentoCard
            mode="text"
            english="Mechanism"
            korean="3박자 자가 회복"
            desc="진단 → 복합치료 → 회복기 관리. 단계별 설계로 회복을 누적합니다."
          />
          <BentoCard
            mode="text"
            english="Origin"
            korean="근본부터"
            desc="증상이 아닌 원인 단위로 들어갑니다. 단발성 처치는 권하지 않습니다."
          />
        </div>
      </section>

      {/* ───────────── LOCATION + CTA ───────────── */}
      <section
        id="location"
        style={{
          background: "var(--color-near-black)",
          color: "var(--color-cream)",
          padding: "120px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-russet)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Visit
            </p>
            <h2
              style={{
                fontWeight: 600,
                fontSize: "clamp(32px, 4.5vw, 52px)",
                letterSpacing: "-0.035em",
                lineHeight: 1.2,
                marginBottom: "32px",
              }}
            >
              종로 청계천,<br />파고다타워 5층.
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.7, opacity: 0.85, marginBottom: "8px" }}>
              {orgInfo.address}
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "15px",
                opacity: 0.65,
                letterSpacing: "0.04em",
              }}
            >
              우편번호 {orgInfo.postalCode}
            </p>
          </div>

          <div>
            <a
              href={`tel:${orgInfo.phone}`}
              style={{
                display: "block",
                background: "var(--color-cream)",
                color: "var(--color-near-black)",
                padding: "32px",
                borderRadius: "8px",
                textDecoration: "none",
                marginBottom: "12px",
                transition: "transform 0.2s ease",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-russet)",
                  marginBottom: "10px",
                }}
              >
                전화 예약
              </p>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "32px",
                  letterSpacing: "-0.03em",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {orgInfo.phoneDisplay}
              </p>
            </a>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(232, 217, 193, 0.55)",
                lineHeight: 1.6,
                padding: "0 4px",
              }}
            >
              평일·토요일 진료. 일요일·공휴일 휴진. 첫 방문 전 전화로 진료 가능 영역을 안내드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer
        style={{
          background: "var(--color-charcoal)",
          color: "rgba(173, 171, 170, 0.85)",
          padding: "48px 32px",
          fontSize: "13px",
          lineHeight: 1.7,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--color-cream)",
                marginBottom: "8px",
              }}
            >
              OBLIV Seoul Origin
            </p>
            <p style={{ opacity: 0.85 }}>
              {orgInfo.address} · TEL {orgInfo.phoneDisplay}
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              opacity: 0.55,
              letterSpacing: "0.04em",
              maxWidth: "320px",
              textAlign: "right",
              lineHeight: 1.7,
            }}
          >
            본 페이지는 의료 정보 안내용이며, 진료 결과는 개인차가 있을 수 있습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ===================================================================
 * Styles
 * =================================================================== */
const navLinkStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "var(--color-mid-charcoal)",
  textDecoration: "none",
  fontWeight: 500,
  letterSpacing: "-0.01em",
};

/* ===================================================================
 * Bento Card
 * =================================================================== */
function BentoCard({
  numeral,
  english,
  korean,
  desc,
  image,
  spanRows,
  mode = "image",
}: {
  numeral?: string;
  english: string;
  korean: string;
  desc: string;
  image?: string;
  spanRows?: number;
  mode?: "image" | "text";
}) {
  const isImage = mode === "image" && image;
  return (
    <article
      style={{
        gridRow: spanRows ? `span ${spanRows}` : undefined,
        background: isImage ? "var(--color-near-black)" : "var(--color-cream)",
        color: isImage ? "var(--color-cream)" : "var(--color-near-black)",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "280px",
      }}
    >
      {isImage && (
        <>
          <img
            src={image}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(0.92) brightness(0.65)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(5,8,12,0.2) 0%, rgba(5,8,12,0.7) 100%)",
            }}
          />
        </>
      )}
      <div
        style={{
          position: "relative",
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "auto" }}>
          {numeral && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: isImage ? "rgba(232, 217, 193, 0.7)" : "var(--color-russet)",
                letterSpacing: "0.06em",
              }}
            >
              {numeral}
            </span>
          )}
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "15px",
              opacity: isImage ? 0.85 : 0.7,
              letterSpacing: "0.005em",
            }}
          >
            {english}
          </span>
        </div>
        <h3
          style={{
            fontWeight: 600,
            fontSize: "26px",
            letterSpacing: "-0.035em",
            lineHeight: 1.2,
            marginBottom: "10px",
            marginTop: "32px",
          }}
        >
          {korean}
        </h3>
        <p
          style={{
            fontSize: "13.5px",
            lineHeight: 1.65,
            opacity: isImage ? 0.85 : 0.78,
          }}
        >
          {desc}
        </p>
      </div>
    </article>
  );
}
