"use server";

import serviceSaleController from "@/controllers/serviceSaleController";
import { create } from "./generic/genericActions";

export default async function createServiceSale(formData: FormData) {
  await create(formData, serviceSaleController, "/");
}