"use server";

import ProductPurchaseDTO from "@/dtos/productPurchaseDto";
import productPurchasesRepo from "@/repositories/productPurchasesRepository";
import { redirect } from "next/navigation";

export default async function createProductPurchase(formData: FormData) {
  const purchase: ProductPurchaseDTO = {
    fecha: new Date(String(formData.get("fecha"))),
    cantidad: Number(formData.get("cantidad")),
    idProducto: Number(formData.get("id_producto")),
    valorTotal: Number(formData.get("valor_total"))
  };

  await productPurchasesRepo.add(purchase);
  redirect("/nuevo/compra");
}