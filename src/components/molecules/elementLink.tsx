import Link from "next/link";
import StyleCard from "../atoms/styleCard";
import PriceTag from "../atoms/priceTag";

interface ElementLinkProps {
  id: number,
  name: string,
  price?: number,
  namespace: string,
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
}

export default function ElementLink({ id, name, price, namespace, Icon }: ElementLinkProps) {
  return (
    <Link href={`/${namespace}/${id}`}>
      <StyleCard Icon={Icon} placeTagAtLeft>
        <div className="relative h-full">
          {price && <PriceTag price={price} isSmall />}
          <div className="flex justify-center items-center h-full">
            <h3 className="text-center">{name}</h3>
          </div>
        </div>
      </StyleCard>
    </Link>
  );
}