import { ReactNode } from "react";

interface ItemsListProps {
  children: ReactNode
}

export default function ItemsList({ children }: ItemsListProps) {
  return (
    <div className="my-10">
      {children}
    </div>
  )
}