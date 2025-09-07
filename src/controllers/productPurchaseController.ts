import { CompraProducto } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import ProductPurchaseDTO from "@/dtos/productPurchaseDto";
import productPurchasesRepo from "@/repositories/productPurchasesRepository";

class ProductPurchaseController
  extends BaseController<CompraProducto, ProductPurchaseDTO>
  implements IController
{
  protected async fillData(formData: FormData): Promise<ProductPurchaseDTO> {
    return {
      fecha: new Date(String(formData.get("fecha"))),
      cantidad: Number(formData.get("cantidad")),
      idProducto: Number(formData.get("id_producto")),
      valorTotal: Number(formData.get("valor_total")),
    };
  }
  constructor() {
    super(productPurchasesRepo);
  }
}

const productPurchaseController = new ProductPurchaseController();
export default productPurchaseController;
