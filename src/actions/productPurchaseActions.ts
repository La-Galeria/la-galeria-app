"use server";

import productPurchaseController from "@/controllers/productPurchaseController";
import ProductPurchaseDTO from "@/dtos/productPurchaseDto";
import productPurchasesRepo from "@/repositories/productPurchasesRepository";
import { redirect } from "next/navigation";

export default async function createProductPurchase(formData: FormData) {
  await productPurchaseController.add(formData);
  redirect("/nuevo/compra");
}