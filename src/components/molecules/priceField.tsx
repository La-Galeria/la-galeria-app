"use client";
import { formatPrice, unformatPrice } from "@/utils/utils";
import { ChangeEvent, useState } from "react";
import InputField from "../atoms/InputField";

interface PriceFieldProps {
  initialValue?: number;
  label: string;
  name: string;
}

export default function PriceField({ initialValue, label, name }: PriceFieldProps) {
  const [value, setValue] = useState(initialValue ?? 0);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    let inputValue = event.target.value;
    console.log(`Received value: ${inputValue}`);

    let value = unformatPrice(inputValue);
    console.log(`Unformatted value: ${value}`);
    setValue(value);
  }

  let displayValue = formatPrice(value);

  return (
    <>
      <InputField label={label} onChange={handleChange} value={displayValue} />
      <input hidden value={value} readOnly name={name} />
    </>
  );
}
