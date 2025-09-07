"use server";

import productController from "@/controllers/productController";
import ProductDTO from "@/dtos/productDto";
import productsRepo from "@/repositories/productsRepository";
import { redirect } from "next/navigation";

export default async function createProduct(formData: FormData) {
  await productController.add(formData);
  redirect("/inventario/productos");
}