import { Pago } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import ExpenseDTO from "@/dtos/expenseDto";
import expensesRepo from "@/repositories/expensesRepository";

class PaymentController extends BaseController<Pago, ExpenseDTO> implements IController {
  constructor() { 
    super(expensesRepo);
  }
}

const paymentController = new PaymentController();
export default paymentController;