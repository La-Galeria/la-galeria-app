import AssetUsageDTO from "@/dtos/assetUsageDto";
import { InsumoGastado } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class AssetUsagesRepo extends BaseRepository<InsumoGastado, AssetUsageDTO> implements IRepository<InsumoGastado, AssetUsageDTO> {
  constructor() {
    super(prisma.insumoGastado);
  }
};

const assetUsagesRepo = new AssetUsagesRepo();
export default assetUsagesRepo;