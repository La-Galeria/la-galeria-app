import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import SubmoduleLink from "@/components/atoms/submoduleLink";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineStore } from "react-icons/md";

export default function Page() {
  return (
    <>
      <PageTitle>Inventario</PageTitle>
      <ItemsList>
        <SubmoduleLink route="/inventario" text="Productos" InnerIcon={MdOutlineStore} />
        <SubmoduleLink route="/inventario" text="Insumos" InnerIcon={HiOutlineSquares2X2} />
      </ItemsList>
    </>
  );
}