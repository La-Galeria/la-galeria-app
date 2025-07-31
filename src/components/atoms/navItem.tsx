import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  route: string,
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
}
export default function NavItem({ route, Icon }: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === route;

  return (
    <Link href={route}>
      <div className={`px-4 py-2 ${active && "bg-slate-50"}`}>
        <Icon className={`size-10 ${active ? "text-lime-950" : "text-slate-50"}`} />
      </div>
    </Link>
  );
}