import AssetDTO from "@/dtos/assetDto";
import { Insumo } from "@/generated/prisma";
import Repository from "@/interfaces/repository";
import prisma from "@/lib/prisma";

interface AssetsRepo extends Repository<Insumo, AssetDTO> { };

async function get(id: number) {
  return await prisma.insumo.findFirst({
    where: {
      id: id
    }
  });
}

async function getAll() {
  return await prisma.insumo.findMany();
}

async function add(data: AssetDTO) {
  return await prisma.insumo.create({ data });
}

async function update(id: number, data: AssetDTO) {
  return await prisma.insumo.update({
    where: {
      id: id
    },
    data: data
  });
}

async function remove(id: number) {
  return await prisma.insumo.delete({
    where: {
      id: id
    }
  });
}

const assetsRepo: AssetsRepo = { get, getAll, add, update, remove };
export default assetsRepo;