"use server";

import AssetPurchaseDTO from "@/dtos/assetPurchaseDto";
import assetPurchasesRepo from "@/repositories/assetPurchasesRepository";
import { redirect } from "next/navigation";

export default async function createAssetPurchase(formData: FormData) {
  const purchase: AssetPurchaseDTO = {
    fecha: new Date(String(formData.get("fecha"))),
    cantidad: Number(formData.get("cantidad")),
    idInsumo: Number(formData.get("id_insumo")),
    valorTotal: Number(formData.get("valor_total"))
  };

  await assetPurchasesRepo.add(purchase);
  redirect("/nuevo/compra");
}