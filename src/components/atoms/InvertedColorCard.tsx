import { ReactNode } from "react"
import Card from "./card"

interface Props {
  children: ReactNode
}

const InvertedColorCard = ({ children }: Props) => {
  return (
    <Card className="bg-primary text-secondary">{children}</Card>
  )
}

export default InvertedColorCard