import { ServiceDTO } from "@/dtos/serviceDto";
import Params from "@/interfaces/routeParams";
import serviceRepo from "@/repositories/servicesRepository";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: Params) {
  const service = await serviceRepo.get(Number(params.id));

  if (!service)
    return NextResponse.json({}, { status: 404});

  return NextResponse.json(service);
}

export async function PUT(request: Request, { params }: Params) {
  const data: ServiceDTO = await request.json();
  const updatedService = await serviceRepo.update(Number(params.id), data);

  if (!updatedService)
    return NextResponse.json({}, { status: 404});

  return NextResponse.json(updatedService);
}

export async function DELETE(request: Request, { params }: Params) {
  const deletedService = await serviceRepo.remove(Number(params.id));

  if (!deletedService)
    return NextResponse.json({}, { status: 404 });

  return NextResponse.json(deletedService);
}