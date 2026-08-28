import { ReactNode } from "react";
import ActionButton from "../atoms/actionButton";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { };

export default function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <ActionButton className="bg-secondary text-primary" {...props}>
      {children}
    </ActionButton>
  );
}