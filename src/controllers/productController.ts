import { Producto } from "@/generated/prisma";
import BaseController from "./base/baseController";
import IController from "@/interfaces/IController";
import ProductDTO from "@/dtos/productDto";
import productsRepo from "@/repositories/productsRepository";

class ProductController
  extends BaseController<Producto, ProductDTO>
  implements IController
{
  protected async fillData(formData: FormData): Promise<ProductDTO> {
    return {
      nombre: String(formData.get("nombre")),
      precioVenta: Number(formData.get("precio-venta")),
      cantidad: Number(formData.get("cantidad")),
    };
  }
  constructor() {
    super(productsRepo);
  }
}

const productController = new ProductController();
export default productController;
