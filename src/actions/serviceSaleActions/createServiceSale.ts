"use server";

import ServiceSaleDTO from "@/dtos/serviceSaleDto";
import serviceSalesRepo from "@/repositories/serviceSalesRepository";
import { redirect } from "next/navigation";

export default async function createServiceSale(formData: FormData) {
  const sale: ServiceSaleDTO = {
    fecha: new Date(String(formData.get("fecha"))),
    cantidad: Number(formData.get("cantidad")),
    idServicio: Number(formData.get("id_servicio")),
  };

  await serviceSalesRepo.add(sale);
  redirect("/nuevo/compra");
}