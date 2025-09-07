"use server";

import productSaleController from "@/controllers/productSaleController";
import ProductSaleDTO from "@/dtos/productSaleDto";
import productSalesRepo from "@/repositories/productSalesRepository";
import productsRepo from "@/repositories/productsRepository";
import { notFound, redirect } from "next/navigation";

export default async function createProductSale(formData: FormData) {
  await productSaleController.add(formData);
  redirect("/nuevo/compra");
}