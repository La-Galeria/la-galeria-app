import ServiceSaleDTO from "@/dtos/serviceSaleDto";
import { VentaServicio } from "@/generated/prisma";
import Repository from "@/interfaces/repository";
import prisma from "@/lib/prisma";

interface ServiceSalesRepo extends Repository<VentaServicio, ServiceSaleDTO> { };

async function get(id: number) {
  return await prisma.ventaServicio.findFirst({
    where: {
      id: id
    }
  });
}

async function getAll() {
  return await prisma.ventaServicio.findMany();
}

async function add(data: ServiceSaleDTO) {
  return await prisma.ventaServicio.create({ data });
}

async function update(id: number, data: ServiceSaleDTO) {
  return await prisma.ventaServicio.update({
    where: {
      id: id
    },
    data: data
  });
}

async function remove(id: number) {
  return await prisma.ventaServicio.delete({
    where: {
      id: id
    }
  });
}

const serviceSalesRepo: ServiceSalesRepo = { get, getAll, add, update, remove };
export default serviceSalesRepo;