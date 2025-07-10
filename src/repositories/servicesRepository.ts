import { ServiceDTO } from "@/dtos/serviceDto";
import { Servicio } from "@/generated/prisma";
import Repository from "@/interfaces/repository";
import prisma from "@/lib/prisma";

interface ServiceRepo extends Repository<Servicio, ServiceDTO> { };

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