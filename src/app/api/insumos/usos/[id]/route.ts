import expenseController from "@/controllers/expenseController";
import Params from "@/interfaces/routeParams";

const controller = expenseController;
export async function GET(request: Request, { params }: Params) {
  return await controller.get({ params });
}

export async function PUT(request: Request, { params }: Params) {
  return await controller.update({ params }, request);
}

export async function DELETE(request: Request, { params }: Params) {
  return await controller.delete({ params });
}