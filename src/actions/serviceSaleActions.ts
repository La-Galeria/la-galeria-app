"use server";

import serviceSaleController from "@/controllers/serviceSaleController";
import ServiceSaleDTO from "@/dtos/serviceSaleDto";
import serviceSalesRepo from "@/repositories/serviceSalesRepository";
import servicesRepo from "@/repositories/servicesRepository";
import { notFound, redirect } from "next/navigation";

export default async function createServiceSale(formData: FormData) {
  await serviceSaleController.add(formData);
  redirect("/nuevo/compra");
}