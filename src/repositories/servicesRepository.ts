import { ServiceDTO } from "@/dtos/serviceDto";
import { Servicio } from "@/generated/prisma";
import prisma from "@/lib/prisma";

interface ServiceRepo {
  get(id: number): Promise<Servicio | null>;
  getAll(): Promise<Servicio[]>;
  add(data: ServiceDTO): Promise<Servicio>;
  update(id: number, data: ServiceDTO): Promise<Servicio | null>;
  remove(id: number): Promise<Servicio | null>
};

async function get(id: number) {
  return await prisma.servicio.findFirst({
    where: {
      id: id
    }
  });
}

async function getAll() {
  return await prisma.servicio.findMany();
}

async function add(data: ServiceDTO) {
  return await prisma.servicio.create({ data });
}

async function update(id: number, data: ServiceDTO) {
  return await prisma.servicio.update({
    where: {
      id: id
    },
    data: data
  });
}

async function remove(id: number) {
  return await prisma.servicio.delete({
    where: {
      id: id
    }
  });
}

const serviceRepo: ServiceRepo = { get, getAll, add, update, remove };
export default serviceRepo;