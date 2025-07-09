import Params from "@/interfaces/routeParams";
import prisma from "@/lib/prisma";
import serviceRepo from "@/repositories/servicesRepository";
import { NextResponse } from "next/server";

export async function GET({ params }: Params) {
  const service = await serviceRepo.get(params.id);

  if (service === null)
    return NextResponse.json({}, { status: 404});

  return NextResponse.json(service);
}

export async function PUT({ params }: Params) {
  const updatedService = await serviceRepo.update(params.id);

  if (!updatedService)
    return NextResponse.json({}, { status: 404});

  return NextResponse.json(updatedService);
}

export async function DELETE({ params }: Params) {
  const deletedService = await serviceRepo.remove(params.id);

  if (!deletedService)
    return NextResponse.json({}, { status: 404 });

  return NextResponse.json(deletedService);
}