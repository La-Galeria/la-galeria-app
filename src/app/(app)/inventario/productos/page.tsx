import EmptyView from "@/components/atoms/emptyView";
import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import ProductLink from "@/components/molecules/productLink";
import productsRepo from "@/repositories/productsRepository";

export default async function Page() {
  const products = await productsRepo.getAll();
  return (
    <>
      <PageTitle>Productos</PageTitle>
      {products.length > 0 ? (
        <ItemsList>
          {products.map(product => (
            <ProductLink product={product} key={product.id}/>
          ))}
        </ItemsList>
      ) : (
        <EmptyView keyword="productos" createLink="/nuevo/producto"></EmptyView>
      )}
    </>
  )
}