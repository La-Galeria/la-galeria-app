import AssetUsageDTO from "@/dtos/assetUsageDto";
import { InsumoGastado } from "@/generated/prisma";
import Repository from "@/interfaces/repository";
import prisma from "@/lib/prisma";

interface AssetUsagesRepo extends Repository<InsumoGastado, AssetUsageDTO> { };

async function get(id: number) {
  return await prisma.insumoGastado.findFirst({
    where: {
      id: id
    }
  });
}

async function getAll() {
  return await prisma.insumoGastado.findMany();
}

async function add(data: AssetUsageDTO) {
  return await prisma.insumoGastado.create({ data });
}

async function update(id: number, data: AssetUsageDTO) {
  return await prisma.insumoGastado.update({
    where: {
      id: id
    },
    data: data
  });
}

async function remove(id: number) {
  return await prisma.insumoGastado.delete({
    where: {
      id: id
    }
  });
}

const assetUsagesRepo: AssetUsagesRepo = { get, getAll, add, update, remove };
export default assetUsagesRepo;