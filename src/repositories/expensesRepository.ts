import ExpenseDTO from "@/dtos/expenseDto";
import { Pago } from "@/generated/prisma";
import IRepository from "@/interfaces/IRepository";
import prisma from "@/lib/prisma";
import BaseRepository from "./baseRepository";

class ExpensesRepo extends BaseRepository<Pago, ExpenseDTO> implements IRepository<Pago, ExpenseDTO> {
  constructor() {
    super(prisma.pago);
  }
};

const expensesRepo = new ExpensesRepo();
export default expensesRepo;