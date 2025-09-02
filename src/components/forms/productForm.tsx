import { Producto } from "@/generated/prisma";
import GenericFormProps from "@/interfaces/genericFormProps";
import FormWrapper from "./formWrapper";
import InputField from "../atoms/InputField";
import PriceField from "../molecules/priceField";

export default function ProductForm({ entity, action }: GenericFormProps<Producto>) {
  return (
  <FormWrapper action={action}>
    <InputField label="Nombre" name="nombre" />
    <InputField label="Cantidad" type="number" name="cantidad" />
    <PriceField label="Precio venta" name="precio-venta" />
  </FormWrapper>
  );
}