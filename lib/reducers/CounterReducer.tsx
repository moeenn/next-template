import produce from "immer"

interface IState {
  count: number
}

type IAction =
  | { type: "INCREMENT", payload: { by: number } }
  | { type: "DECREMENT", payload: { by: number } }

  
export const initState: IState = {
  count: 0,
}

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "INCREMENT":
      return produce(state, draft => {
        draft.count += 1
      })

    case "DECREMENT":
      return produce(state, draft => {
        draft.count += 1
      })
  }
}