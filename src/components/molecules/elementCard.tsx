import { MouseEventHandler } from "react";
import PriceTag from "../atoms/priceTag";
import PrimaryButton from "./primaryButton";
import SecondaryButton from "./secondaryButton";
import Card from "../atoms/card";
import InvertedColorCard from "../atoms/InvertedColorCard";

interface ElementCardProps {
  name: string,
  description?: string | null,
  price?: number | undefined,
  onDelete: MouseEventHandler
}

export default function ElementCard({ name, description, price, onDelete }: ElementCardProps) {
  const descriptionToShow = description ?? "Sin descripción";

  return (
    <InvertedColorCard>
      {price && <PriceTag price={price} />}
      <div className="flex flex-col justify-between items-center h-100">
        <h2>{name}</h2>
        <p className="text-center text-lg apply-italic">{descriptionToShow}</p>
        <div className="flex flex-col justify-center gap-3">
          <SecondaryButton>
            <h2>
              Editar
            </h2>
          </SecondaryButton>
          <PrimaryButton onClick={onDelete}>
            <h2>
              Eliminar
            </h2>
          </PrimaryButton>
        </div>
      </div>
    </InvertedColorCard>
  );
}