import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import SubmoduleLink from "@/components/molecules/submoduleLink";
import { FiScissors } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineStore } from "react-icons/md";

export default function Page() {
  return (
    <>
      <PageTitle>Seleccione tipo de venta</PageTitle>
      <ItemsList>
        <SubmoduleLink route="venta/producto" text="Producto" InnerIcon={MdOutlineStore} />
        <SubmoduleLink route="venta/servicio" text="Servicio" InnerIcon={FiScissors} />
      </ItemsList>
    </>
  )
}