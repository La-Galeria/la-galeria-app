"use server";

import productSaleController from "@/controllers/productSaleController";
import { create } from "./generic/genericActions";

export default async function createProductSale(formData: FormData) {
  await create(formData, productSaleController, "/");
}