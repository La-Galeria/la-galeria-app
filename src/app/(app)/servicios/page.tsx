import EmptyView from "@/components/atoms/emptyView";
import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import ElementCard from "@/components/molecules/elementCard";
import ServiceLink from "@/components/molecules/serviceLink";
import prisma from "@/lib/prisma";

export default async function Page() {
  const services = await prisma.servicio.findMany();
  console.log(services);
  return (
    <>
      <PageTitle>Servicios</PageTitle>
      {services.length > 0 ? (
        <ItemsList>
          {services.map((service) => (
            <ServiceLink service={service} />
          ))}
        </ItemsList>
      ) : (
        <EmptyView keyword="servicios" createLink="/nuevo/servicio" />
      )}
    </>
  );
}
