import createProductSale from "@/actions/productSaleActions";
import ProductSaleForm from "@/components/forms/productSaleForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nueva venta">
      <ProductSaleForm action={createProductSale} />
    </FormCard>
  );
}