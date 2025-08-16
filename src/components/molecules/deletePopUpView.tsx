import { MouseEventHandler } from "react";
import DeletePopUp from "./deletePopUp";

interface DeletePopUpViewProps {
  onCancel: MouseEventHandler
};

export default function DeletePopUpView({ onCancel }: DeletePopUpViewProps) {
  return (
    <div className="z-20 h-full w-full flex flex-col justify-end items-center pb-20 px-5 bg-neutral-400/80 absolute top-0 left-0">
      <DeletePopUp onCancel={onCancel} />
    </div>
  );
}