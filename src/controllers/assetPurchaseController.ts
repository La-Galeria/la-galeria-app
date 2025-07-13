import { CompraInsumo } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import AssetPurchaseDTO from "@/dtos/assetPurchaseDto";
import assetPurchasesRepo from "@/repositories/assetPurchasesRepository";

class AssetPurchaseController extends BaseController<CompraInsumo, AssetPurchaseDTO> implements IController {
  constructor() { 
    super(assetPurchasesRepo);
  }
}

const assetPurchaseController = new AssetPurchaseController();
export default assetPurchaseController;