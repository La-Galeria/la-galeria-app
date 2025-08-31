import { Pago } from "@/generated/prisma";
import GenericFormProps from "@/interfaces/genericFormProps";
import FormWrapper from "./formWrapper";
import InputField from "../atoms/InputField";
import PriceField from "../molecules/priceField";

export default function ExpenseForm({ entity, action }: GenericFormProps<Pago>) {
  return (
  <FormWrapper action={action}>
    <InputField label="Fecha" type="date" />
    <InputField label="Descripción" type="textarea" />
    <PriceField label="Valor" />
  </FormWrapper>
  );
}