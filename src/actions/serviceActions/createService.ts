"use server";

import { ServiceDTO } from "@/dtos/serviceDto";
import servicesRepo from "@/repositories/servicesRepository";
import { redirect } from "next/navigation";

export default async function createService(formData: FormData) {
  const service: ServiceDTO = {
    nombre: String(formData.get("nombre")),
    descripcion: String(formData.get("descripcion")),
    precio: Number(formData.get("precio")),
  };

  await servicesRepo.add(service);

  redirect("/servicios");
}