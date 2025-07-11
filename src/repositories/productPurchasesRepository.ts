import AssetUsageDTO from "@/dtos/assetUsageDto";
import ProductPurchaseDTO from "@/dtos/productPurchaseDto";
import { CompraProducto, InsumoGastado } from "@/generated/prisma";
import Repository from "@/interfaces/repository";
import prisma from "@/lib/prisma";

interface ProductPurchasesRepo extends Repository<CompraProducto, ProductPurchaseDTO> { };

async function get(id: number) {
  return await prisma.compraProducto.findFirst({
    where: {
      id: id
    }
  });
}

async function getAll() {
  return await prisma.compraProducto.findMany();
}

async function add(data: ProductPurchaseDTO) {
  return await prisma.compraProducto.create({ data });
}

async function update(id: number, data: ProductPurchaseDTO) {
  return await prisma.compraProducto.update({
    where: {
      id: id
    },
    data: data
  });
}

async function remove(id: number) {
  return await prisma.compraProducto.delete({
    where: {
      id: id
    }
  });
}

const productPurchasesRepo: ProductPurchasesRepo = { get, getAll, add, update, remove };
export default productPurchasesRepo;