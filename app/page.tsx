import OblivseoulLandingPage from "@/components/OblivseoulLandingPage";

/**
 * / — 웹 랜딩 페이지 (single-source dual-output 의 web-adapter).
 * 인쇄 1-pager 는 /print 라우트.
 */
export const metadata = {
  title: "OBLIV Seoul Origin · 오블리브의원 서울 오리진점",
  description:
    "서울 종로 피부·발톱·재활 통합 의료 클리닉. 피부건축학 기반 맞춤 솔루션, 3박자 자가 회복 메커니즘.",
};

export default function Page() {
  return <OblivseoulLandingPage />;
}
