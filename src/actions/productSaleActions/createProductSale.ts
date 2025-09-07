"use server";

import ProductSaleDTO from "@/dtos/productSaleDto";
import productSalesRepo from "@/repositories/productSalesRepository";
import { redirect } from "next/navigation";

export default async function createProductSale(formData: FormData) {
  const sale: ProductSaleDTO = {
    fecha: new Date(String(formData.get("fecha"))),
    cantidad: Number(formData.get("cantidad")),
    idProducto: Number(formData.get("id_producto")),
  };

  await productSalesRepo.add(sale);
  redirect("/nuevo/compra");
}