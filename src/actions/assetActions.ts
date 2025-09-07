"use server";

import assetController from "@/controllers/assetController";
import AssetDTO from "@/dtos/assetDto";
import assetsRepo from "@/repositories/assetsRepository";
import { redirect } from "next/navigation";

export default async function createAsset(formData: FormData) {
  await assetController.add(formData);
  redirect("/inventario/insumos");
}