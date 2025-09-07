import { CompraProducto } from "@/generated/prisma";
import BaseController from "./base/baseController";
import IController from "@/interfaces/IController";
import ProductPurchaseDTO from "@/dtos/productPurchaseDto";
import productPurchasesRepo from "@/repositories/productPurchasesRepository";
import productsRepo from "@/repositories/productsRepository";

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

  protected async validate(formData: FormData): Promise<boolean> {
    const productId = Number(formData.get("id_producto"));
    const product = await productsRepo.get(productId);

    if (!product)
      return false;

    return true;
  }
  constructor() {
    super(productPurchasesRepo);
  }
}

const productPurchaseController = new ProductPurchaseController();
export default productPurchaseController;
