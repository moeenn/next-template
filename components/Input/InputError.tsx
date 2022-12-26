import { FC } from "react"

interface IProps {
  message: string
}

export const InputError: FC<IProps> = ({ message }) => {
  return (
    <p className="text-xs text-red-700">{message}</p>
  )
}