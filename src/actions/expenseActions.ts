"use server";

import expenseController from "@/controllers/expenseController";
import ExpenseDTO from "@/dtos/expenseDto";
import expensesRepo from "@/repositories/expensesRepository";
import { redirect } from "next/navigation";

export default async function createExpense(formData: FormData) {
  await expenseController.add(formData);
  redirect("/nuevo");
}