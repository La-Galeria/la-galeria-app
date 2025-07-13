import AssetPurchaseDTO from "@/dtos/assetPurchaseDto";
import { CompraInsumo } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class AssetPurchasesRepo extends BaseRepository<CompraInsumo, AssetPurchaseDTO> implements IRepository<CompraInsumo, AssetPurchaseDTO> {
  constructor() {
    super(prisma.compraInsumo);
  }
};

const assetPurchasesRepo = new AssetPurchasesRepo();
export default assetPurchasesRepo;