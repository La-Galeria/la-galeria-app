"use server";

import ProductSaleDTO from "@/dtos/productSaleDto";
import productSalesRepo from "@/repositories/productSalesRepository";
import productsRepo from "@/repositories/productsRepository";
import { notFound, redirect } from "next/navigation";

export default async function createProductSale(formData: FormData) {
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
    valor: product.precioVenta * amount
  };

  await productSalesRepo.add(sale);
  redirect("/nuevo/compra");
}