import { CompraProducto } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import ProductPurchaseDTO from "@/dtos/productPurchaseDto";
import productPurchasesRepo from "@/repositories/productPurchasesRepository";

class ProductPurchaseController extends BaseController<CompraProducto, ProductPurchaseDTO> implements IController {
  constructor() { 
    super(productPurchasesRepo);
  }
}

const productPurchaseController = new ProductPurchaseController();
export default productPurchaseController;