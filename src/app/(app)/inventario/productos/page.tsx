import EmptyView from "@/components/atoms/emptyView";
import PageTitle from "@/components/atoms/pageTitle";

export default function Page() {
  return (
    <>
      <PageTitle>Productos</PageTitle>
      <EmptyView keyword="productos"></EmptyView>
    </>
  )
}