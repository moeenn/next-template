import { FC } from "react"
import classNames from "classnames"

interface IProps {
  size: "small" | "medium",
}

export const Loader: FC<IProps> = (props) => {
  const styles = classNames(
    {
      "animate-spin": true, 
      "border border-2": true, 
      "border-blue-300": true, 
      "border-l-blue-700": true, 
      "rounded-full": true,
      "h-4": props.size === "small",  
      "w-4": props.size === "small",
      "h-6": props.size === "medium",  
      "w-6": props.size === "medium",
    }
  )

  return (
    <div className="flex items-center">
      <div className={styles}>
      </div>
    </div>
  )
}
