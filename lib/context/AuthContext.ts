import { createContext } from "react"
import { IState, IAction } from "@/lib/reducers/AuthReducer"

interface IAuthContext {
  dispatch: (action: IAction) => void
  state: IState
}

export const AuthContext = createContext<IAuthContext>({
  state: {
    token: "",
    user: {
      id: 0,
      name: "",
      email: "",
    },
  },
  dispatch: (action: IAction) => {},
})
