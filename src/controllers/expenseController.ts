import { Pago } from "@/generated/prisma";
import BaseController from "./baseController";
import IController from "@/interfaces/IController";
import ExpenseDTO from "@/dtos/expenseDto";
import expensesRepo from "@/repositories/expensesRepository";

class ExpenseController
  extends BaseController<Pago, ExpenseDTO>
  implements IController
{
  protected async fillData(formData: FormData): Promise<ExpenseDTO> {
    return {
      fecha: new Date(String(formData.get("fecha"))),
      descripcion: String(formData.get("descripcion")),
      valor: Number(formData.get("valor")),
    };
  }
  constructor() {
    super(expensesRepo);
  }
}

const expenseController = new ExpenseController();
export default expenseController;
