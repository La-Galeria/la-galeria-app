import { GrFormNext } from "react-icons/gr"
import StyleLink from "./styleLink"

interface SubmoduleLinkProps {
  text: string,
  route: string,
  InnerIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function SubmoduleLink({ text, route, InnerIcon }: SubmoduleLinkProps) {
  return (
    <StyleLink Icon={GrFormNext} route={route} placeTagAtLeft={false}>
      <h1>{text}</h1>
      <InnerIcon className="size-10" />
    </StyleLink>
  );
}