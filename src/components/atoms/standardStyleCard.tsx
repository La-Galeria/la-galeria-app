import StyleCard, { StyleCardProps } from "./styleCard";


export default function StandardStyleCard(props: StyleCardProps) {
  return (
    <StyleCard Icon={props.Icon} placeTagAtLeft={props.placeTagAtLeft}>
      <div className="flex flex-col justify-center items-center h-full">
        {props.children}
      </div>
    </StyleCard>
  );
}
