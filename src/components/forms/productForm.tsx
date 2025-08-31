import { Producto } from "@/generated/prisma";
import GenericFormProps from "@/interfaces/genericFormProps";
import FormWrapper from "./formWrapper";
import InputField from "../atoms/InputField";
import PriceField from "../molecules/priceField";

export default function ProductForm({ entity, action }: GenericFormProps<Producto>) {
  return (
  <FormWrapper action={action}>
    <InputField label="Nombre" />
    <InputField label="Cantidad" type="number" />
    <PriceField label="Precio" />
  </FormWrapper>
  );
}