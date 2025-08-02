interface PriceTagProps {
  price: number
}

export default function PriceTag({ price }: PriceTagProps) {
  const formattedPrice = Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(price);
  return (
    <div className="absolute top-0 right-0 border-solid border-2 border-orange-950 rounded-bl-2xl rounded-tr-2xl">
      <div className="flex justify-center items-center py-0.5 px-3">
        <h4 className="underline">{formattedPrice}</h4>
      </div>
    </div>
  );
}