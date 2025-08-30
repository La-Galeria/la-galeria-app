import { Servicio } from "@/generated/prisma";
import GenericFormProps from "@/interfaces/genericFormProps";
import Form from "next/form";
import InputField from "../atoms/InputField";
import FormWrapper from "./formWrapper";
import PriceField from "../molecules/priceField";

export default function ServiceForm({ entity, action }: GenericFormProps<Servicio>) {
  return (
    <FormWrapper action={action}>
      <InputField label="Nombre" />
      <InputField label="Descripción" type="textarea" />
      <PriceField label="Precio" />
    </FormWrapper>
  );
}