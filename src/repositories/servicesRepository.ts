import { ServiceDTO } from "@/dtos/serviceDto";
import prisma from "@/lib/prisma";

interface ServiceRepo {
  get: Function,
  getAll: Function,
  add: Function,
  update: Function,
  remove: Function
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

async function update(data: ServiceDTO, id: number) {
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