"use server";

import productPurchaseController from "@/controllers/productPurchaseController";
import { create } from "./generic/genericActions";

export default async function createProductPurchase(formData: FormData) {
  await create(formData, productPurchaseController, "/");
}