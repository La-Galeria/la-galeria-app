import { CompraInsumo, Insumo } from "@/generated/prisma";
import IController from "@/interfaces/IController";
import AssetPurchaseDTO from "@/dtos/assetPurchaseDto";
import assetPurchasesRepo from "@/repositories/assetPurchasesRepository";
import assetsRepo from "@/repositories/assetsRepository";
import BaseComplexController from "./base/baseComplexController";
import AssetDTO from "@/dtos/assetDto";

class AssetPurchaseController
  extends BaseComplexController<CompraInsumo, AssetPurchaseDTO, Insumo, AssetDTO>
  implements IController
{
  protected getKey(): string {
    return "id_insumo";
  }

  protected async fillData(formData: FormData): Promise<AssetPurchaseDTO> {
    return {
      fecha: new Date(String(formData.get("fecha"))),
      cantidad: Number(formData.get("cantidad")),
      idInsumo: Number(formData.get("id_insumo")),
      valorTotal: Number(formData.get("valor_total")),
    };
  }
  

  constructor() {
    super(assetPurchasesRepo, assetsRepo);
  }
}

const assetPurchaseController = new AssetPurchaseController();
export default assetPurchaseController;
