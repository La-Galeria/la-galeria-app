import { Servicio } from "@/generated/prisma";
import ElementLink from "./elementLink";
import { FiScissors } from "react-icons/fi";

interface ServiceLinkProps {
  service: Servicio;
}
export default function ServiceLink({ service }: ServiceLinkProps) {
  return (
    <ElementLink
      id={service.id}
      name={service.nombre}
      price={service.precio}
      Icon={FiScissors}
      namespace="servicios"
    />
  );
}
