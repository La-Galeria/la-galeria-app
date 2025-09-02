import createProduct from "@/actions/productActions/createProduct";
import ProductForm from "@/components/forms/productForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nuevo producto">
      <ProductForm action={createProduct} />
    </FormCard>
  );
}