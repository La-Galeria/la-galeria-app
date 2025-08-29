"use client";
import ServiceForm from "@/components/forms/serviceForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nuevo servicio">
      <ServiceForm action={() => alert("Done.")} />
    </FormCard>
  );
}