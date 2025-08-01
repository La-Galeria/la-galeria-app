import { GrNext } from "react-icons/gr"
import StyleLink from "./styleLink"

interface SubmoduleLinkProps {
  text: string,
  route: string,
  InnerIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function SubmoduleLink({ text, route, InnerIcon }: SubmoduleLinkProps) {
  return (
    <StyleLink Icon={GrNext} route={route} placeTagAtLeft={false}>
      <h2>{text}</h2>
      <InnerIcon className="size-10 text-orange-950" />
    </StyleLink>
  );
}