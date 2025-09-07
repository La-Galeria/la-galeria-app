"use server";

import assetPurchaseController from "@/controllers/assetPurchaseController";
import AssetPurchaseDTO from "@/dtos/assetPurchaseDto";
import assetPurchasesRepo from "@/repositories/assetPurchasesRepository";
import { redirect } from "next/navigation";

export default async function createAssetPurchase(formData: FormData) {
  await assetPurchaseController.add(formData);
  redirect("/nuevo/compra");
}