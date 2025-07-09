import { ServiceDTO } from "@/dtos/serviceDto";
import prisma from "@/lib/prisma"
import serviceRepo from "@/repositories/servicesRepository";
import { NextResponse } from "next/server";


export async function GET() {
  const services = await serviceRepo.getAll();
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  const data: ServiceDTO = await request.json();
  const service = await prisma.servicio.create({ data });
  
  return NextResponse.json(service);
}