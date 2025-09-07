import { CompraProducto } from "@/generated/prisma";
import GenericFormProps from "@/interfaces/genericFormProps";
import FormWrapper from "./formWrapper";
import InputField from "../atoms/InputField";
import DropDownField from "../atoms/dropDownField";
import productsRepo from "@/repositories/productsRepository";
import servicesRepo from "@/repositories/servicesRepository";

export default async function ServiceSaleForm({ entity, action }: GenericFormProps<CompraProducto>) {
  const services = await servicesRepo.getAll();

  return (
  <FormWrapper action={action}>
    <InputField label="Fecha" type="date" name="fecha" />
    <DropDownField label="Servicio" name="id_servicio">
      <option value="0">- Seleccione -</option>
      {services.map(service => (
        <option value={service.id} key={service.id}>{service.nombre}</option>
      ))}
    </DropDownField>
    <InputField label="Cantidad" type="number" name="cantidad" />
  </FormWrapper>
  );
}