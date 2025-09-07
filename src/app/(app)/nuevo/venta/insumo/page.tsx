import createServiceSale from "@/actions/serviceSaleActions/createServiceSale";
import ServiceSaleForm from "@/components/forms/serviceSaleForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nueva venta">
      <ServiceSaleForm action={createServiceSale} />
    </FormCard>
  );
}