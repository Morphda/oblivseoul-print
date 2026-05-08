import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OBLIV Seoul Origin · 1-pager",
  description:
    "오블리브의원 서울 오리진점 환자용 인쇄 안내서 (A4 1-pager). " +
    "피부·발톱·재활 통합 의료 클리닉.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
