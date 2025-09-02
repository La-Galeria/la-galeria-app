import EmptyView from "@/components/atoms/emptyView";
import ItemsList from "@/components/atoms/itemsList";
import PageTitle from "@/components/atoms/pageTitle";
import AssetLink from "@/components/molecules/assetLink";
import assetsRepo from "@/repositories/assetsRepository";

export default async function Page() {
  const assets = await assetsRepo.getAll();
  return (
    <>
      <PageTitle>Insumos</PageTitle>
      {assets.length > 0 ? (
        <ItemsList>
          {assets.map((asset) => (
            <AssetLink asset={asset} key={asset.id} />
          ))}
        </ItemsList>
      ) : (
        <EmptyView keyword="insumos" createLink="/nuevo/insumo"></EmptyView>
      )}
    </>
  );
}
