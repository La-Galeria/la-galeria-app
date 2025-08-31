import { Servicio } from "@/generated/prisma";
import GenericFormProps from "@/interfaces/genericFormProps";
import Form from "next/form";
import InputField from "../atoms/InputField";
import FormWrapper from "./formWrapper";
import PriceField from "../molecules/priceField";

export default function ServiceForm({ entity, action }: GenericFormProps<Servicio>) {
  return (
    <FormWrapper action={action}>
      <InputField label="Nombre" name="nombre" />
      <InputField label="Descripción" type="textarea" name="descripcion" />
      <PriceField label="Precio" name="precio" />
    </FormWrapper>
  );
}