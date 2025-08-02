import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import SubmoduleLink from "@/components/molecules/submoduleLink";
import { FaScissors } from "react-icons/fa6";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdCreditCard, MdOutlineShop, MdOutlineShoppingCart, MdOutlineStore } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";

export default function Page() {
  return (
    <>
      <PageTitle>Nuevo registro</PageTitle>
      <ItemsList>
        <SubmoduleLink route="/nuevo/compra" text="Compra" InnerIcon={MdOutlineShoppingCart} />
        <SubmoduleLink route="/nuevo/venta" text="Venta" InnerIcon={MdCreditCard} />
        <SubmoduleLink route="/nuevo/gasto" text="Gasto" InnerIcon={RiBillLine} />
        <SubmoduleLink route="/nuevo/servicio" text="Servicio" InnerIcon={FaScissors} />
        <SubmoduleLink route="/nuevo/producto" text="Producto" InnerIcon={MdOutlineStore} />
        <SubmoduleLink route="/inventario/insumos" text="Insumo" InnerIcon={HiOutlineSquares2X2} />
      </ItemsList>
    </>
  );
}