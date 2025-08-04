import { ReactNode } from "react";
import ActionButton from "../atoms/actionButton";

interface SecondaryButtonProps {
  children: ReactNode,
  type?: "submit" | "reset" | "button" | undefined
};

export default function SecondaryButton({ children, type }: SecondaryButtonProps) {
  return (
    <ActionButton type={type} className="border-orange-950 border-solid border-2">
      {children}
    </ActionButton>
  )
  return (
    <button type={type} className="border-orange-950 border-solid border-2 rounded-full text-orange-950 px-4 py-2">
      <h2>
        {children}
      </h2>
    </button>
  );
}