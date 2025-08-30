import { formatPrice } from "@/utils/utils";

interface PriceTagProps {
  price: number,
  isSmall?: boolean
}

export default function PriceTag({ price, isSmall = false }: PriceTagProps) {
  const formattedPrice = formatPrice(price);
  return (
    <div className="absolute top-0 right-0 border-solid border-2 border-orange-950 rounded-bl-3xl rounded-tr-3xl">
      <div className="flex justify-center items-center py-0.5 px-3">
        <p className={`underline ${isSmall ? "text-base" : "text-lg"}`}>{formattedPrice}</p>
      </div>
    </div>
  );
}