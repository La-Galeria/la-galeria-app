import { Insumo } from "@/generated/prisma";
import ElementLink from "./elementLink";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

interface AssetLinkProps {
  asset: Insumo
}

export default function AssetLink({ asset }: AssetLinkProps) {
  return (
    <ElementLink
      id={asset.id}
      name={asset.nombre}
      namespace="inventario/insumos"
      Icon={HiOutlineSquares2X2}
    />
  );
}