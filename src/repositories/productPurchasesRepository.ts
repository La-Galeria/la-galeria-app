import ProductPurchaseDTO from "@/dtos/productPurchaseDto";
import { CompraProducto } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class ProductPurchasesRepo extends BaseRepository<CompraProducto, ProductPurchaseDTO> implements IRepository<CompraProducto, ProductPurchaseDTO> {
  constructor() {
    super(prisma.compraProducto);
  }
};

const productPurchasesRepo = new ProductPurchasesRepo();
export default productPurchasesRepo;