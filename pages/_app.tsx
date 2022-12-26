import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { useReducer } from "react"
import { initState, reducer } from "@/lib/reducers/AuthReducer"
import { AuthContext } from "@/lib/context/AuthContext"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthContext.Provider>
  )
}
