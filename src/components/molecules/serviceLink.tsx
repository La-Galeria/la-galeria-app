import Link from "next/link";
import StyleCard from "../atoms/styleCard";
import { FaScissors } from "react-icons/fa6";
import PriceTag from "../atoms/priceTag";

interface ServiceLinkProps {
  name: string,
  price: number,
}
export default function ServiceLink({ name, price }: ServiceLinkProps) {
  return (
    <Link href="/something">
      <StyleCard Icon={FaScissors} placeTagAtLeft>
        <div className="relative h-full">
          <PriceTag price={price} />
          <div className="flex justify-center items-center h-full">
            <h2>{name}</h2>
          </div>
        </div>
      </StyleCard>
    </Link>
  );
}