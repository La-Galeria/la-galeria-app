import { ReactNode } from "react";

interface CardProps {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-slate-50/75 rounded-3xl relative py-8 px-2 my-7 min-h-9/12 h-max">
      {children}
    </div>
  );
}