import EmptyView from "@/components/atoms/emptyView";
import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import ServiceLink from "@/components/molecules/serviceLink";

export default function Page() {
  return (
    <>
      <PageTitle>Servicios</PageTitle>
      {/* <EmptyView keyword="servicios" /> */}
      <ItemsList>
        <ServiceLink name="Corte" price={10000} />
      </ItemsList>
    </>
  );
}