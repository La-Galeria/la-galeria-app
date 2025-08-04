import PriceTag from "../atoms/priceTag"
import PrimaryButton from "../molecules/primaryButton"
import SecondaryButton from "../molecules/secondaryButton"

interface ElementViewProps {
  name: string,
  description?: string | null,
  price?: number | undefined
}
export default function ElementView({ name, description, price }: ElementViewProps) {
  const descriptionToShow = description ?? "Sin descripción";

  return (
    <div className="bg-slate-50/75 rounded-3xl relative p-8 my-14 h-9/12">
      {price && <PriceTag price={price} />}
      <div className="flex flex-col justify-between items-center h-full">
        <h2>{name}</h2>
        <p className="text-center text-lg apply-italic">{descriptionToShow}</p>
        <div className="flex flex-col justify-center gap-3">
          <SecondaryButton>
            <h2>
              Editar
            </h2>
          </SecondaryButton>
          <PrimaryButton>
            <h2>
              Eliminar
            </h2>
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}