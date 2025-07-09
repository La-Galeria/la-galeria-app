import prisma from "@/lib/prisma";

interface ServiceDTO {
  nombre: string,
  descripcion: string | null,
  precio: number
};

export async function get(id: number) {
  return await prisma.servicio.findFirst({
    where: {
      id: id
    }
  });
}

export async function getAll() {
  return await prisma.servicio.findMany();
}

export async function add(data: ServiceDTO) {
  return await prisma.servicio.create({ data });
}

export async function update(data: ServiceDTO, id: number) {
  return await prisma.servicio.update({
    where: {
      id: id
    },
    data: data
  });
}

export async function remove(id: number) {
  return await prisma.servicio.delete({
    where: {
      id: id
    }
  });
}