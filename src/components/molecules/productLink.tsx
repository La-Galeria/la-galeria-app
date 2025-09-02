import { Producto } from "@/generated/prisma";
import ElementLink from "./elementLink";
import { MdOutlineStore } from "react-icons/md";

interface ProductLinkProps {
  product: Producto;
}

export default function ProductLink({ product }: ProductLinkProps) {
  return (
    <ElementLink
      id={product.id}
      name={product.nombre}
      namespace="inventario/productos"
      Icon={MdOutlineStore}
      price={product.precioVenta}
    />
  );
}
