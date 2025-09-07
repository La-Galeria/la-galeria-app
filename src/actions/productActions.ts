"use server";

import productController from "@/controllers/productController";
import { create } from "./generic/genericActions";

export default async function createProduct(formData: FormData) {
  await create(formData, productController, "/inventario/productos");
}