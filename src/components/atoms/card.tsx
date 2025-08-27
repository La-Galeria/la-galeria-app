import { ReactNode } from "react";

interface CardProps {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-slate-50/75 rounded-3xl relative p-8 my-14 h-9/12">
      {children}
    </div>
  );
}