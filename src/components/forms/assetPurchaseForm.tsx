import { CompraInsumo } from "@/generated/prisma";
import GenericFormProps from "@/interfaces/genericFormProps";
import assetsRepo from "@/repositories/assetsRepository";
import FormWrapper from "./formWrapper";
import InputField from "../atoms/InputField";
import DropDownField from "../atoms/dropDownField";
import PriceField from "../molecules/priceField";

export default async function AssetPurchaseForm({ entity, action }: GenericFormProps<CompraInsumo>) {
  const assets = await assetsRepo.getAll();

  return (
  <FormWrapper action={action}>
    <InputField label="Fecha" type="date" name="fecha" />
    <DropDownField label="Insumo" name="id_insumo">
      <option value="0">- Seleccione -</option>
      {assets.map(asset => (
        <option value={asset.id} key={asset.id}>{asset.nombre}</option>
      ))}
    </DropDownField>
    <InputField label="Cantidad" type="number" name="cantidad" />
    <PriceField label="Valor total" name="valor_total"/>
  </FormWrapper>
  );
}