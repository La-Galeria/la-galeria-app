"use server";

import ProductDTO from "@/dtos/productDto";

export default async function createProduct(formData: FormData) {
  const product: ProductDTO = {
    nombre: String(formData.get("nombre")),
    precioVenta: Number(formData.get("precio-venta")),
  }
}