import serviceController from "@/controllers/serviceController";
import Params from "@/interfaces/routeParams";

export async function GET(request: Request, { params }: Params) {
  return await serviceController.get({ params });
}

export async function PUT(request: Request, { params }: Params) {
  return await serviceController.update({ params }, request);
}

export async function DELETE(request: Request, { params }: Params) {
  return await serviceController.delete({ params });
}