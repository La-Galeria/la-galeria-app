import createAssetPurchase from "@/actions/assetPurchaseActions";
import AssetPurchaseForm from "@/components/forms/assetPurchaseForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nueva compra">
      <AssetPurchaseForm action={createAssetPurchase} />
    </FormCard>
  );
}