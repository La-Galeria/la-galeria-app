import assetUsageController from "@/controllers/assetUsageController";

const controller = assetUsageController;
export async function GET() {
  return await controller.getAll();
}

export async function POST(request: Request) {
  return await controller.add(request);
}