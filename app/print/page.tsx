import OblivseoulOnePager from "@/components/OblivseoulOnePager";

/**
 * /print — A4 portrait 인쇄용 1-pager 라우트.
 * Playwright `page.pdf()` 또는 브라우저 인쇄로 PDF 출력.
 */
export const metadata = {
  title: "OBLIV Seoul Origin · 인쇄 1-pager",
};

export default function PrintPage() {
  return <OblivseoulOnePager />;
}
