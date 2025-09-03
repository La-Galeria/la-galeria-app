"use server";

import ExpenseDTO from "@/dtos/expenseDto";
import expensesRepo from "@/repositories/expensesRepository";
import { redirect } from "next/navigation";

export default async function createExpense(formData: FormData) {
  const expense: ExpenseDTO = {
    fecha: new Date(String(formData.get("fecha"))),
    descripcion: String(formData.get("descripcion")),
    valor: Number(formData.get("valor")),
  };

  await expensesRepo.add(expense);

  redirect("/nuevo");
}