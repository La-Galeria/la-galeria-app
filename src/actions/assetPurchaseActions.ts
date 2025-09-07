"use server";

import assetPurchaseController from "@/controllers/assetPurchaseController";
import { create } from "./generic/genericActions";

export default async function createAssetPurchase(formData: FormData) {
  await create(formData, assetPurchaseController, "/");
}