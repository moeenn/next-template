import { FC } from "react"

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const Container: FC<IProps> = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>
}
