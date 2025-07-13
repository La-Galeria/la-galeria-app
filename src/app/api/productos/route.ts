import productController from "@/controllers/productController";

const controller = productController;
export async function GET() {
  return await controller.getAll();
}

export async function POST(request: Request) {
  return await controller.add(request);
}