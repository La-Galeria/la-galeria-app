import { GrNext } from "react-icons/gr"
import StyleLink from "./styleLink"
import Link from "next/link";
import StandardStyleCard from "./standardStyleCard";

interface SubmoduleLinkProps {
  text: string,
  route: string,
  InnerIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function SubmoduleLink({ text, route, InnerIcon }: SubmoduleLinkProps) {
  return (
    <Link href={route}>
      <StandardStyleCard Icon={GrNext} placeTagAtLeft={false}>
        <h2>{text}</h2>
        <InnerIcon className="size-10 text-orange-950" />
      </StandardStyleCard>
    </Link>
  );
}