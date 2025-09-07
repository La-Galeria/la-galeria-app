import createService from "@/actions/serviceActions";
import ServiceForm from "@/components/forms/serviceForm";
import FormCard from "@/components/molecules/formCard";
import servicesRepo from "@/repositories/servicesRepository";

export default function Page() {
  return (
    <FormCard title="Nuevo servicio">
      <ServiceForm action={createService} />
    </FormCard>
  );
}