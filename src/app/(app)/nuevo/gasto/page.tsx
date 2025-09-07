import createExpense from "@/actions/expenseActions";
import ExpenseForm from "@/components/forms/expenseForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nuevo Gasto">
      <ExpenseForm action={createExpense} />
    </FormCard>
  );
}