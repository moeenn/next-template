import { FC } from "react"
import { Container } from "@/components"
import { Navbar } from "@/components"

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const BaseLayout: FC<IProps> = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <div className="pt-4">
        <Container>
          {children}
        </Container>
      </div>
    </>
  )
}