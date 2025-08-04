import { ReactNode } from "react"

interface ActionButtonProps {
  className: string,
  children: ReactNode,
  type?: "button" | "submit" | "reset" | undefined
};

export default function ActionButton({ className, children, type }: ActionButtonProps) {
  return (
    <button type={type} className={"rounded-full px-10 py-2 " + className}>
      {children}
    </button>
  )
}