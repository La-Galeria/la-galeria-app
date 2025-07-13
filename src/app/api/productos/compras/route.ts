import productPurchaseController from "@/controllers/productPurchaseController";

const controller = productPurchaseController;
export async function GET() {
  return await controller.getAll();
}

export async function POST(request: Request) {
  return await controller.add(request);
}