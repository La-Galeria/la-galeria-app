import GenericFormProps from "@/interfaces/genericFormProps";
import Form from "next/form";
import { ReactNode } from "react";
import PrimaryButton from "../molecules/primaryButton";

interface FormWrapperProps {
  action: (formData: FormData) => void;
  children: ReactNode;
}

export default function FormWrapper({ action, children }: FormWrapperProps) {
  return (
    <Form action={action} className="w-full flex flex-col items-center gap-1 px-4">
      {children}
      <PrimaryButton type="submit">Guardar</PrimaryButton>
    </Form>
  );
}
