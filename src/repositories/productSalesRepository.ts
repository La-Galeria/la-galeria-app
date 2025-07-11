import ProductDTO from "@/dtos/productDto";
import ProductSaleDTO from "@/dtos/productSaleDto";
import { VentaProducto } from "@/generated/prisma";
import Repository from "@/interfaces/repository";
import prisma from "@/lib/prisma";

interface ProductSalesRepo extends Repository<VentaProducto, ProductSaleDTO> { };

async function get(id: number) {
  return await prisma.ventaProducto.findFirst({
    where: {
      id: id
    }
  });
}

async function getAll() {
  return await prisma.ventaProducto.findMany();
}

async function add(data: ProductSaleDTO) {
  return await prisma.ventaProducto.create({ data });
}

async function update(id: number, data: ProductSaleDTO) {
  return await prisma.ventaProducto.update({
    where: {
      id: id
    },
    data: data
  });
}

async function remove(id: number) {
  return await prisma.ventaProducto.delete({
    where: {
      id: id
    }
  });
}

const productSalesRepo: ProductSalesRepo = { get, getAll, add, update, remove };
export default productSalesRepo;