import { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode
};

export default function PageTitle({ children }: PageTitleProps) {
  return <h1 className="text-center m-10">{children}</h1>;
}