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
  console.log(active);

  return (
    <Link href={route}>
      <div className={`p-2 ${active && "bg-slate-50"}`}>
        <Icon className={`size-14 ${active ? "text-lime-950" : "text-slate-50"}`} />
      </div>
    </Link>
  );
}