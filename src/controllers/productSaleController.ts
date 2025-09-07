import { Producto, VentaProducto } from "@/generated/prisma";
import IController from "@/interfaces/IController";
import ProductSaleDTO from "@/dtos/productSaleDto";
import productSalesRepo from "@/repositories/productSalesRepository";
import productsRepo from "@/repositories/productsRepository";
import BaseComplexController from "./base/baseComplexController";
import ProductDTO from "@/dtos/productDto";

class ProductSaleController
  extends BaseComplexController<VentaProducto, ProductSaleDTO, Producto, ProductDTO>
  implements IController
{
  protected getKey(): string {
    return "id_producto";
  }

  protected async fillData(formData: FormData): Promise<ProductSaleDTO> {
    const product = await this.getDependency(formData);
    const amount = Number(formData.get("cantidad"));

    const sale: ProductSaleDTO = {
      fecha: new Date(String(formData.get("fecha"))),
      cantidad: amount,
      idProducto: product!.id,
      valor: product!.precioVenta * amount,
    };
    return sale;
  }

  constructor() {
    super(productSalesRepo, productsRepo);
  }
}

const productSaleController = new ProductSaleController();
export default productSaleController;
