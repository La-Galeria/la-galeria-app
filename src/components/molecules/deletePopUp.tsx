import { MouseEventHandler } from "react";
import PrimaryButton from "./primaryButton";
import SecondaryButton from "./secondaryButton";

interface DeletePopUpProps {
  onCancel: MouseEventHandler
};

export default function DeletePopUp({ onCancel }: DeletePopUpProps) {
  return (
    <div className="rounded-3xl bg-slate-50/85 flex flex-col justify-between items-center p-4 w-max h-1/4">
      <h3 className="text-center">¿Seguro?</h3>
      <div className="flex justify-center gap-1">
        <SecondaryButton onClick={onCancel}><h4>Cancelar</h4></SecondaryButton>
        <PrimaryButton><h4>Eliminar</h4></PrimaryButton>
      </div>
    </div>
  );
}