import produce from "immer"
import { IUser } from "@/lib/types"
import { Localstorage } from "@/lib/services"

export interface IState {
  token: string
  user: IUser
}

export type IAction =
  | { type: "LOGIN"; payload: { token: string; user: IUser } }
  | { type: "LOGOUT" }

const defaultToken = ""
const defaultUser: IUser = {
  id: 0,
  name: "",
  email: "",
}

export const initState: IState = {
  token: Localstorage.get("next.token") ?? defaultToken,
  user: Localstorage.get("next.user") ?? defaultUser,
}

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "LOGIN":
      Localstorage.set("next.token", action.payload.token)
      Localstorage.set("next.user", action.payload.user)

      return produce(state, (draft) => {
        draft.token = action.payload.token
        draft.user = action.payload.user
      })

    case "LOGOUT":
      Localstorage.remove("next.user")
      Localstorage.remove("next.token")
      return initState
  }
}
