"use server";

import ServiceSaleDTO from "@/dtos/serviceSaleDto";
import serviceSalesRepo from "@/repositories/serviceSalesRepository";
import servicesRepo from "@/repositories/servicesRepository";
import { notFound, redirect } from "next/navigation";

export default async function createServiceSale(formData: FormData) {
  const serviceId = Number(formData.get("id_servicio"));
  const service = await servicesRepo.get(serviceId);
  if (!service) {
    return notFound();
  }

  const amount = Number(formData.get("cantidad"));

  const sale: ServiceSaleDTO = {
    fecha: new Date(String(formData.get("fecha"))),
    cantidad: amount,
    idServicio: serviceId,
    valor: service?.precio
  };

  await serviceSalesRepo.add(sale);
  redirect("/nuevo/compra");
}