import { CompraProducto } from "@/generated/prisma";
import GenericFormProps from "@/interfaces/genericFormProps";
import FormWrapper from "./formWrapper";
import InputField from "../atoms/InputField";
import PriceField from "../molecules/priceField";
import DropDownField from "../atoms/dropDownField";
import productsRepo from "@/repositories/productsRepository";

export default async function ProductPurchaseForm({ entity, action }: GenericFormProps<CompraProducto>) {
  const products = await productsRepo.getAll();

  return (
  <FormWrapper action={action}>
    <InputField label="Fecha" type="date" name="fecha" />
    <DropDownField label="Producto" name="id_producto">
      <option value="0">- Seleccione -</option>
      {products.map(product => (
        <option value={product.id}>{product.nombre}</option>
      ))}
    </DropDownField>
    <InputField label="Cantidad" type="number" name="cantidad" />
    <PriceField label="Valor total" name="valor_total"/>
  </FormWrapper>
  );
}