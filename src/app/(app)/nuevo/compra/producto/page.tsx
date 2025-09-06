import createProductPurchase from "@/actions/productPurchaseActions/createProductPurchase";
import ProductPurchaseForm from "@/components/forms/productPurchaseForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nueva compra">
      <ProductPurchaseForm action={createProductPurchase} />
    </FormCard>
  );
}