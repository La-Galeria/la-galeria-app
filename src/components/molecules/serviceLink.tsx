import Link from "next/link";
import StyleCard from "../atoms/styleCard";
import { FaScissors } from "react-icons/fa6";
import PriceTag from "../atoms/priceTag";
import { Servicio } from "@/generated/prisma";

interface ServiceLinkProps {
  service: Servicio
}
export default function ServiceLink({ service }: ServiceLinkProps) {
  return (
    <Link href={`/servicios/${service.id}`}>
      <StyleCard Icon={FaScissors} placeTagAtLeft>
        <div className="relative h-full">
          <PriceTag price={service.precio} isSmall />
          <div className="flex justify-center items-center h-full">
            <h2>{service.nombre}</h2>
          </div>
        </div>
      </StyleCard>
    </Link>
  );
}