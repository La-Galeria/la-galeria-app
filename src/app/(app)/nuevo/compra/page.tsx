import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import SubmoduleLink from "@/components/molecules/submoduleLink";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineStore } from "react-icons/md";

export default function Page() {
  return (
    <>
      <PageTitle>Seleccione tipo de compra</PageTitle>
      <ItemsList>
        <SubmoduleLink route="compra/producto" text="Producto" InnerIcon={MdOutlineStore} />
        <SubmoduleLink route="compra/insumo" text="Insumo" InnerIcon={HiOutlineSquares2X2} />
      </ItemsList>
    </>
  )
}