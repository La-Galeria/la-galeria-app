import Link from "next/link"
import React, { ReactNode } from "react";

interface NavItemProps {
  route: string,
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}
export default function NavItem({ route, Icon }: NavItemProps) {
  return (
    <Link href={route}>
      <div className="p-2">
      <Icon className="size-14" />
      </div>
    </Link>
  );
}