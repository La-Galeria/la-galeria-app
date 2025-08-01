import { ReactNode } from "react";

interface ItemsListProps {
  children: ReactNode
}

export default function ItemsList({ children }: ItemsListProps) {
  return (
    <div className="mx-3 my-10">
      {children}
    </div>
  )
}