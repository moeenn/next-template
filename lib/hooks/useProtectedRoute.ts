import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { AuthContext } from "@/lib/context/AuthContext"

interface IUseProtectedRoutesArgs {
  redirectURL: string
}

export const useProtectedRoute = (args: IUseProtectedRoutesArgs) => {
  const router = useRouter()
  const authContext = useContext(AuthContext)

  useEffect(() => {
    /* only execute client side */
    if (typeof window === "undefined") return

    /**
     *  redirect to provided URL if user is not logged-in
     *
     */
    if (!authContext.state.token) {
      router.push(args.redirectURL)
    }
  })
}
