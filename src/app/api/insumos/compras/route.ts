import assetPurchaseController from "@/controllers/assetPurchaseController";

const controller = assetPurchaseController;
export async function GET() {
  return await controller.getAll();
}

export async function POST(request: Request) {
  return await controller.add(request);
}