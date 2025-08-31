"use client";
import AssetForm from "@/components/forms/assetForm";
import ExpenseForm from "@/components/forms/expenseForm";
import FormCard from "@/components/molecules/formCard";

export default function Page() {
  return (
    <FormCard title="Nuevo Gasto">
      <ExpenseForm action={() => alert("Done.")} />
    </FormCard>
  );
}