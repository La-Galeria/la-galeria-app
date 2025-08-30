export function formatPrice(value: number): string {
  return Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);
}

export function unformatPrice(price: string): number {
  let value = Number.parseInt(price.substring(2).replaceAll(".", ""));
  if (Number.isNaN(value))
    value = 0;
  return value;
}