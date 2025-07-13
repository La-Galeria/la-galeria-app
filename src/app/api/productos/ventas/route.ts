import productSaleController from "@/controllers/productSaleController";

const controller = productSaleController;
export async function GET() {
  return await controller.getAll();
}

export async function POST(request: Request) {
  return await controller.add(request);
}