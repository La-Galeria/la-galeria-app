"use server";

import serviceController from "@/controllers/serviceController";
import { ServiceDTO } from "@/dtos/serviceDto";
import servicesRepo from "@/repositories/servicesRepository";
import { redirect } from "next/navigation";

export default async function createService(formData: FormData) {
  await serviceController.add(formData);
  return redirect("/servicios");
}