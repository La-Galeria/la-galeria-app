import createServiceSale from "@/actions/serviceSaleActions";
import ServiceSaleForm from "@/components/forms/serviceSaleForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nueva venta">
      <ServiceSaleForm action={createServiceSale} />
    </FormCard>
  );
}