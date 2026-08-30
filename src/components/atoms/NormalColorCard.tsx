import { ReactNode } from "react"
import Card from "./card"

interface Props {
  children: ReactNode
}

const NormalColorCard = ({ children }: Props) => {
  return (
    <Card className="bg-secondary text-primary">{children}</Card>
  )
}

export default NormalColorCard