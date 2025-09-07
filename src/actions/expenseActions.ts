"use server";

import expenseController from "@/controllers/expenseController";
import { create } from "./generic/genericActions";

export default async function createExpense(formData: FormData) {
  await create(formData, expenseController, "/");
}