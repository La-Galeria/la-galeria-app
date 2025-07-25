import Link from "next/link"
import { ReactNode } from "react";

interface NavItemProps {
  route: string,
  children: ReactNode
}
export default function NavItem({ route, children }: NavItemProps) {
  return (
    <Link href={route}>
      {children}
    </Link>
  );
}