import PaymentDTO from "@/dtos/paymentDto";
import { Pago } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class PaymentsRepo extends BaseRepository<Pago, PaymentDTO> implements IRepository<Pago, PaymentDTO> {
  constructor() {
    super(prisma.pago);
  }
};

const paymentsRepo = new PaymentsRepo();
export default paymentsRepo;