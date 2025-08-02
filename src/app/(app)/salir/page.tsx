import PageTitle from "@/components/atoms/pageTitle";
import StandardStyleCard from "@/components/molecules/standardStyleCard";
import { MdLogout } from "react-icons/md";

export default function Page() {
  return (
    <>
      <PageTitle>¿Desea salir?</PageTitle> 
      <div className="mt-10">
        <StandardStyleCard placeTagAtLeft={false} Icon={MdLogout}>
          <h2>Salir</h2>
        </StandardStyleCard>
      </div>
    </>
  );
}