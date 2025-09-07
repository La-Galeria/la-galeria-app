import { CompraInsumo } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import AssetPurchaseDTO from "@/dtos/assetPurchaseDto";
import assetPurchasesRepo from "@/repositories/assetPurchasesRepository";

class AssetPurchaseController
  extends BaseController<CompraInsumo, AssetPurchaseDTO>
  implements IController
{
  protected async fillData(formData: FormData): Promise<AssetPurchaseDTO> {
    return {
      fecha: new Date(String(formData.get("fecha"))),
      cantidad: Number(formData.get("cantidad")),
      idInsumo: Number(formData.get("id_insumo")),
      valorTotal: Number(formData.get("valor_total")),
    };
  }
  constructor() {
    super(assetPurchasesRepo);
  }
}

const assetPurchaseController = new AssetPurchaseController();
export default assetPurchaseController;
