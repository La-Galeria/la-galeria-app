import Link from "next/link"
import StyleCard, { StyleCardProps } from "./styleCard"

interface StyleLinkProps extends StyleCardProps {
  route: string,
}

export default function StyleLink({ route, ...props }: StyleLinkProps) {
  return (
    <Link href={route}>
      <StyleCard Icon={props.Icon} placeTagAtLeft={props.placeTagAtLeft}>
        {props.children}
      </StyleCard>
    </Link>
  );
}