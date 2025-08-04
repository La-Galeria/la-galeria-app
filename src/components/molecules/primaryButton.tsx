import { ReactNode } from "react";
import ActionButton from "../atoms/actionButton";

interface PrimaryButtonProps {
  children: ReactNode,
  type?: "submit" | "reset" | "button" | undefined
};

export default function PrimaryButton({ children, type }: PrimaryButtonProps) {
  return (
    <ActionButton type={type} className="bg-orange-950 text-slate-50">
      {children}
    </ActionButton>
  );
}