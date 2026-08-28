import React, { ReactNode } from "react";
import ActionButton from "../atoms/actionButton";

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
};

export default function SecondaryButton({ children, ...props }: SecondaryButtonProps) {
  return (
    <ActionButton className="border-secondary text-secondary border-solid border-2" {...props}>
      {children}
    </ActionButton>
  );
}