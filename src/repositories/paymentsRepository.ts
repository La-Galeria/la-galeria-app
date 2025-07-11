import PaymentDTO from "@/dtos/paymentDto";
import { Pago } from "@/generated/prisma";
import Repository from "@/interfaces/repository";
import prisma from "@/lib/prisma";

interface PaymentsRepo extends Repository<Pago, PaymentDTO> { };

async function get(id: number) {
  return await prisma.pago.findFirst({
    where: {
      id: id
    }
  });
}

async function getAll() {
  return await prisma.pago.findMany();
}

async function add(data: PaymentDTO) {
  return await prisma.pago.create({ data });
}

async function update(id: number, data: PaymentDTO) {
  return await prisma.pago.update({
    where: {
      id: id
    },
    data: data
  });
}

async function remove(id: number) {
  return await prisma.pago.delete({
    where: {
      id: id
    }
  });
}

const paymentsRepo: PaymentsRepo = { get, getAll, add, update, remove };
export default paymentsRepo;