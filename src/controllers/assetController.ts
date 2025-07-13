import { Insumo } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import AssetDTO from "@/dtos/assetDto";
import assetsRepo from "@/repositories/assetsRepository";

class AssetController extends BaseController<Insumo, AssetDTO> implements IController {
  constructor() { 
    super(assetsRepo);
  }
}

const assetController = new AssetController();
export default assetController;