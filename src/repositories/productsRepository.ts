import ProductDTO from "@/dtos/productDto";
import { Producto } from "@/generated/prisma";
import Repository from "@/interfaces/repository";
import prisma from "@/lib/prisma";

interface ProductsRepo extends Repository<Producto, ProductDTO> { };

async function get(id: number) {
  return await prisma.producto.findFirst({
    where: {
      id: id
    }
  });
}

async function getAll() {
  return await prisma.producto.findMany();
}

async function add(data: ProductDTO) {
  return await prisma.producto.create({ data });
}

async function update(id: number, data: ProductDTO) {
  return await prisma.producto.update({
    where: {
      id: id
    },
    data: data
  });
}

async function remove(id: number) {
  return await prisma.producto.delete({
    where: {
      id: id
    }
  });
}

const productsRepo: ProductsRepo = { get, getAll, add, update, remove };
export default productsRepo;