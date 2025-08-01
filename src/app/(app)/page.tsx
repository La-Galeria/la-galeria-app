import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import StyleCard from "@/components/atoms/styleCard";
import { FaArrowTrendDown, FaArrowTrendUp, FaPlus, FaScissors } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <PageTitle>Resumen del mes</PageTitle>
      <ItemsList>
        <StyleCard placeTagAtLeft={false} Icon={FaArrowTrendUp}>
          <div className="relative h-full">
            <h4 className="absolute top-1 left-2">Ingresos</h4>
            <div className="flex flex-col justify-center items-center h-full">
              <h2>$7.000.000</h2>
            </div>
          </div>
        </StyleCard>

        <StyleCard placeTagAtLeft Icon={FaArrowTrendDown}>
          <div className="relative h-full">
            <h4 className="absolute top-1 right-2">Gastos</h4>
            <div className="flex flex-col justify-center items-center h-full">
              <h2>$1.000.000</h2>
            </div>
          </div>
        </StyleCard>
      </ItemsList>
    </>
  );
}
