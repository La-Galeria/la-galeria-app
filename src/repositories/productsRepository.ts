import ProductDTO from "@/dtos/productDto";
import { Producto } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class ProductsRepo extends BaseRepository<Producto, ProductDTO> implements IRepository<Producto, ProductDTO> {
  constructor() {
    super(prisma.producto);
  }
};

const productsRepo = new ProductsRepo();
export default productsRepo;