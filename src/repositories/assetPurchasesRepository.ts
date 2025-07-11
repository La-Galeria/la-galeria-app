import AssetPurchaseDTO from "@/dtos/assetPurchaseDto";
import { CompraInsumo } from "@/generated/prisma";
import Repository from "@/interfaces/repository";
import prisma from "@/lib/prisma";

interface AssetPurchasesRepo extends Repository<CompraInsumo, AssetPurchaseDTO> { };

async function get(id: number) {
  return await prisma.compraInsumo.findFirst({
    where: {
      id: id
    }
  });
}

async function getAll() {
  return await prisma.compraInsumo.findMany();
}

async function add(data: AssetPurchaseDTO) {
  return await prisma.compraInsumo.create({ data });
}

async function update(id: number, data: AssetPurchaseDTO) {
  return await prisma.compraInsumo.update({
    where: {
      id: id
    },
    data: data
  });
}

async function remove(id: number) {
  return await prisma.compraInsumo.delete({
    where: {
      id: id
    }
  });
}

const assetPurchasesRepo: AssetPurchasesRepo = { get, getAll, add, update, remove };
export default assetPurchasesRepo;