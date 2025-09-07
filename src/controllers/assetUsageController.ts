import { InsumoGastado } from "@/generated/prisma";
import BaseController from "./base/baseController";
import IController from "@/interfaces/IController";
import AssetUsageDTO from "@/dtos/assetUsageDto";
import assetUsagesRepo from "@/repositories/assetUsagesRepository";

class AssetUsageController extends BaseController<InsumoGastado, AssetUsageDTO> implements IController {
  constructor() { 
    super(assetUsagesRepo);
  }
}

const assetUsageController = new AssetUsageController();
export default assetUsageController;