import { MouseEventHandler } from "react";

export default interface DeletePopUpProps {
  onCancel: MouseEventHandler,
  onDelete: (formData: FormData) => void
};