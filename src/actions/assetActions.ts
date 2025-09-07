"use server";

import assetController from "@/controllers/assetController";
import { create } from "./generic/genericActions";

export default async function createAsset(formData: FormData) {
  await create(formData, assetController, "/inventario/insumos")
}