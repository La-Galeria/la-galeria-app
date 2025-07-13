import assetController from "@/controllers/assetController";

const controller = assetController;
export async function GET() {
  return await controller.getAll();
}

export async function POST(request: Request) {
  return await controller.add(request);
}