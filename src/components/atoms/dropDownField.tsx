import { SelectHTMLAttributes } from "react";

interface DropDownFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export default function DropDownField({
  label,
  children,
  ...props
}: DropDownFieldProps) {
  return (
    <div className="w-full">
      <label>
        <h4>{label}:</h4>
        <select {...props}>{children}</select>
      </label>
    </div>
  );
}
