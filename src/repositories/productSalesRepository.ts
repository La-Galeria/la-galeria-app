import ProductSaleDTO from "@/dtos/productSaleDto";
import { VentaProducto } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class ProductSalesRepo extends BaseRepository<VentaProducto, ProductSaleDTO> implements IRepository<VentaProducto, ProductSaleDTO> {
  constructor() {
    super(prisma.ventaProducto);
  }
};

const productSalesRepo = new ProductSalesRepo();
export default productSalesRepo;