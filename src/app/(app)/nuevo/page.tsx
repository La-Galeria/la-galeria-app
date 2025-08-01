import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import SubmoduleLink from "@/components/atoms/submoduleLink";
import { MdCreditCard, MdOutlineShop } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";

export default function Page() {
  return (
    <>
      <PageTitle>Nuevo registro</PageTitle>
      <ItemsList>
        <SubmoduleLink route="/nuevo/compra" text="Compra" InnerIcon={MdOutlineShop} />
        <SubmoduleLink route="/nuevo/venta" text="Venta" InnerIcon={MdCreditCard} />
        <SubmoduleLink route="/nuevo/gasto" text="Gasto" InnerIcon={RiBillLine} />
      </ItemsList>
    </>
  );
}