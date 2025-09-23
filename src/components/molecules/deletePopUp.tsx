"use client";

import { MouseEventHandler } from "react";
import PrimaryButton from "./primaryButton";
import SecondaryButton from "./secondaryButton";
import Form from "next/form";
import { useParams } from "next/navigation";
import DeletePopUpProps from "@/interfaces/deletePopUpProps";

export default function DeletePopUp({ onCancel, onDelete }: DeletePopUpProps) {
  const { id } = useParams();

  return (
    <div className="rounded-3xl bg-slate-50/85 flex flex-col justify-between items-center p-4 w-max h-1/4">
      <h3 className="text-center">¿Seguro?</h3>
      <div className="flex justify-center gap-1">
        <SecondaryButton onClick={onCancel}>
          <h4>Cancelar</h4>
        </SecondaryButton>
        <Form action={onDelete}>
          <input type="hidden" hidden name="id" value={id} />
          <PrimaryButton>
            <h4>Eliminar</h4>
          </PrimaryButton>
        </Form>
      </div>
    </div>
  );
}
