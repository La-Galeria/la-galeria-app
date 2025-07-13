import AssetDTO from "@/dtos/assetDto";
import { Insumo } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class AssetsRepo extends BaseRepository<Insumo, AssetDTO> implements IRepository<Insumo, AssetDTO> {
  constructor() {
    super(prisma.insumo);
  }
};

const assetsRepo = new AssetsRepo();
export default assetsRepo;