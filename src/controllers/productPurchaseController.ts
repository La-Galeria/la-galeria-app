import { CompraProducto, Producto } from "@/generated/prisma";
import IController from "@/interfaces/IController";
import ProductPurchaseDTO from "@/dtos/productPurchaseDto";
import productPurchasesRepo from "@/repositories/productPurchasesRepository";
import productsRepo from "@/repositories/productsRepository";
import BaseComplexController from "./base/baseComplexController";
import ProductDTO from "@/dtos/productDto";

class ProductPurchaseController
  extends BaseComplexController<CompraProducto, ProductPurchaseDTO, Producto, ProductDTO>
  implements IController
{
  protected getKey(): string {
    return "id_producto";
  }

  protected async fillData(formData: FormData): Promise<ProductPurchaseDTO> {
    return {
      fecha: new Date(String(formData.get("fecha"))),
      cantidad: Number(formData.get("cantidad")),
      idProducto: Number(formData.get("id_producto")),
      valorTotal: Number(formData.get("valor_total")),
    };
  }

  constructor() {
    super(productPurchasesRepo, productsRepo);
  }
}

const productPurchaseController = new ProductPurchaseController();
export default productPurchaseController;
