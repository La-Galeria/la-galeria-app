import { CompraInsumo } from "@/generated/prisma";
import BaseController from "./base/baseController";
import IController from "@/interfaces/IController";
import AssetPurchaseDTO from "@/dtos/assetPurchaseDto";
import assetPurchasesRepo from "@/repositories/assetPurchasesRepository";
import assetsRepo from "@/repositories/assetsRepository";

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
  
  protected async validate(formData: FormData): Promise<boolean> {
    const assetId = Number(formData.get("id_insumo"));
    const asset = await assetsRepo.get(assetId);
    if (!asset)
      return false;

    return true;
  }

  constructor() {
    super(assetPurchasesRepo);
  }
}

const assetPurchaseController = new AssetPurchaseController();
export default assetPurchaseController;
