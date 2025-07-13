import serviceController from "@/controllers/serviceController";

const controller = serviceController;

export async function GET() {
  return controller.getAll();
}

export async function POST(request: Request) {
  return controller.add(request);
}