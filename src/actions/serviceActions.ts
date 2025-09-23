"use server";

import serviceController from "@/controllers/serviceController";
import { create, destroy } from "./generic/genericActions";

export async function createService(formData: FormData) {
  await create(formData, serviceController, "/servicios")
}

export async function deleteService(formData: FormData) {
  await destroy(formData, serviceController, "/servicios");
}