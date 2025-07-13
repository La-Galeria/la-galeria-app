import serviceController from "@/controllers/serviceController";

export async function GET() {
  return serviceController.getAll();
}

export async function POST(request: Request) {
  return serviceController.add(request);
}