"use server";

import AssetDTO from "@/dtos/assetDto";
import assetsRepo from "@/repositories/assetsRepository";
import { redirect } from "next/navigation";

export default async function createAsset(formData: FormData) {
  const asset: AssetDTO = {
    nombre: String(formData.get("nombre")),
    cantidad: Number(formData.get("cantidad")),
  };

  await assetsRepo.add(asset);
  redirect("/inventario/insumos");
}