import { ReactNode } from "react";
import ActionButton from "../atoms/actionButton";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { };

export default function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <ActionButton className="bg-orange-950 text-slate-50" {...props}>
      {children}
    </ActionButton>
  );
}