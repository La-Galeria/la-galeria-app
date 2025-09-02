"use server";

import ProductDTO from "@/dtos/productDto";
import productsRepo from "@/repositories/productsRepository";
import { redirect } from "next/navigation";

export default async function createProduct(formData: FormData) {
  const product: ProductDTO = {
    nombre: String(formData.get("nombre")),
    precioVenta: Number(formData.get("precio-venta")),
    cantidad: Number(formData.get("cantidad")),
  };

  await productsRepo.add(product);
  redirect("/inventario/productos");
}