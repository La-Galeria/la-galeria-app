import { Insumo } from "@/generated/prisma";
import BaseController from "./base/baseController";
import IController from "@/interfaces/IController";
import AssetDTO from "@/dtos/assetDto";
import assetsRepo from "@/repositories/assetsRepository";

class AssetController
  extends BaseController<Insumo, AssetDTO>
  implements IController
{
  protected async fillData(formData: FormData): Promise<AssetDTO> {
    return {
      nombre: String(formData.get("nombre")),
      cantidad: Number(formData.get("cantidad")),
    };
  }
  constructor() {
    super(assetsRepo);
  }
}

const assetController = new AssetController();
export default assetController;
