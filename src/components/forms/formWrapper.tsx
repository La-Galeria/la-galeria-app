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
    <Form
      action={action}
      className="w-full flex flex-col items-center justify-between gap-1 px-4 h-100"
    >
      <div className="w-full my-5">{children}</div>
      <PrimaryButton type="submit"><h3>Guardar</h3></PrimaryButton>
    </Form>
  );
}
