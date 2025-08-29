import { ReactNode } from "react";

export default interface GenericFormProps<TEntity> {
  entity?: TEntity,
  action: (formData: FormData) => void,
}