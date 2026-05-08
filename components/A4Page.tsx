import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * A4 portrait 인쇄 컨테이너.
 * 210mm × 297mm 고정. 화면에서는 그림자 + 중앙 정렬, 인쇄에서는 page-break.
 */
export default function A4Page({ children, className = "" }: Props) {
  return <div className={`a4-page ${className}`}>{children}</div>;
}
