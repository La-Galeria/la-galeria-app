import productController from "@/controllers/productController";
import productPurchaseController from "@/controllers/productPurchaseController";
import Params from "@/interfaces/routeParams";

const controller = productPurchaseController;
export async function GET(request: Request, { params }: Params) {
  return await controller.get({ params });
}

export async function PUT(request: Request, { params }: Params) {
  return await controller.update({ params }, request);
}

export async function DELETE(request: Request, { params }: Params) {
  return await controller.delete({ params });
}