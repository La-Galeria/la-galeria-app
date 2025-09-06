import createProduct from "@/actions/productActions/createProduct";
import ProductPurchaseForm from "@/components/forms/productPurchaseForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nueva compra">
      <ProductPurchaseForm action={createProduct} />
    </FormCard>
  )
}