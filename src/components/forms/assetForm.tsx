import { Insumo } from "@/generated/prisma";
import GenericFormProps from "@/interfaces/genericFormProps";
import FormWrapper from "./formWrapper";
import InputField from "../atoms/InputField";
import PriceField from "../molecules/priceField";

export default function AssetForm({ entity, action }: GenericFormProps<Insumo>) {
  return (
  <FormWrapper action={action}>
    <InputField label="Nombre" name="nombre" />
    <InputField label="Cantidad" type="number" name="cantidad" />
  </FormWrapper>
  );
}