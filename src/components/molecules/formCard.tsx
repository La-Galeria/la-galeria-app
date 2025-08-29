import { ReactNode } from "react";
import Card from "../atoms/card";

interface FormCardProps {
  children: ReactNode;
  title: string;
}

export default function FormCard({ children, title }: FormCardProps) {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <h2>{title}</h2>
        {children}
      </div>
    </Card>
  );
}
