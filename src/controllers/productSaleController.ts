import { VentaProducto } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import ProductSaleDTO from "@/dtos/productSaleDto";
import productSalesRepo from "@/repositories/productSalesRepository";

class ProductSaleController extends BaseController<VentaProducto, ProductSaleDTO> implements IController {
  constructor() { 
    super(productSalesRepo);
  }
}

const productSaleController = new ProductSaleController();
export default productSaleController;