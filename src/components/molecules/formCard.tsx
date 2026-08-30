import { ReactNode } from "react";
import Card from "../atoms/card";
import InvertedColorCard from "../atoms/InvertedColorCard";

interface FormCardProps {
  children: ReactNode;
  title: string;
}

export default function FormCard({ children, title }: FormCardProps) {
  return (
    <InvertedColorCard>
      <div className="flex flex-col items-center">
        <h2>{title}</h2>
        {children}
      </div>
    </InvertedColorCard>
  );
}
