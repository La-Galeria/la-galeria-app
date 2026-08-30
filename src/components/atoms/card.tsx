import { HTMLAttributes, ReactNode } from "react";

interface CardProps {
  children: ReactNode,
  className: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={[
      "rounded-3xl relative py-8 px-2 my-7 min-h-9/12 h-max",
      className
    ].join(" ")}>
      {children}
    </div>
  );
}