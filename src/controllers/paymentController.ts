import { Pago } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import PaymentDTO from "@/dtos/paymentDto";
import paymentsRepo from "@/repositories/paymentsRepository";

class PaymentController extends BaseController<Pago, PaymentDTO> implements IController {
  constructor() { 
    super(paymentsRepo);
  }
}

const paymentController = new PaymentController();
export default paymentController;