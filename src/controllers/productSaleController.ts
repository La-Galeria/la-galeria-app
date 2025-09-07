import { VentaProducto } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import ProductSaleDTO from "@/dtos/productSaleDto";
import productSalesRepo from "@/repositories/productSalesRepository";
import productsRepo from "@/repositories/productsRepository";
import { notFound } from "next/navigation";

class ProductSaleController
  extends BaseController<VentaProducto, ProductSaleDTO>
  implements IController
{
  protected async fillData(formData: FormData): Promise<ProductSaleDTO> {
    const productId = Number(formData.get("id_producto"));
    const product = await productsRepo.get(productId);
    if (!product) {
      return notFound();
    }

    const amount = Number(formData.get("cantidad"));

    const sale: ProductSaleDTO = {
      fecha: new Date(String(formData.get("fecha"))),
      cantidad: amount,
      idProducto: productId,
      valor: product.precioVenta * amount,
    };
    return sale;
  }
  constructor() {
    super(productSalesRepo);
  }
}

const productSaleController = new ProductSaleController();
export default productSaleController;
