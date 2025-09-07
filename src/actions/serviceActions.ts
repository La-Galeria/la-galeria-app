"use server";

import serviceController from "@/controllers/serviceController";
import { create } from "./generic/genericActions";

export default async function createService(formData: FormData) {
  await create(formData, serviceController, "/servicios")
}