import serviceSaleController from "@/controllers/serviceSaleController";

const controller = serviceSaleController;

export async function GET() {
  return controller.getAll();
}

export async function POST(request: Request) {
  return controller.add(request);
}