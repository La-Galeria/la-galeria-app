import createAsset from "@/actions/assetActions";
import AssetForm from "@/components/forms/assetForm";
import ProductForm from "@/components/forms/productForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nuevo Insumo">
      <AssetForm action={createAsset} />
    </FormCard>
  );
}