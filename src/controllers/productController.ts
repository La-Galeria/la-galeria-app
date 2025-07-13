import { Producto } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import ProductDTO from "@/dtos/productDto";
import productsRepo from "@/repositories/productsRepository";

class ProductController extends BaseController<Producto, ProductDTO> implements IController {
  constructor() { 
    super(productsRepo);
  }
}

const productController = new ProductController();
export default productController;