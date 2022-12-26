import { useReducer } from "react"
import { initState, reducer } from "@/lib/reducers/CounterReducer"

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div className="flex flex-row text-xs">
      <button
        className="bg-gray-200 rounded-l px-3 py-2"
        onClick={() => dispatch({ type: "DECREMENT", payload: { by: 1 } })}
        disabled={state.count === 0}
      >-</button>
      <div className="bg-gray-100 flex">
        <span className="my-auto px-4">{state.count}</span>
      </div>
      <button
        className="bg-gray-200 rounded-r px-3 py-2"
        onClick={() => dispatch({ type: "INCREMENT", payload: { by: 1 } })}
      >+</button>
    </div>
  )
}