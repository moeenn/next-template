import { useRouter } from "next/router"
import { useContext } from "react"
import { AuthContext } from "@/lib/context/AuthContext"

interface IUseProtectedRoutesArgs {
  redirectURL: string
}

export const useProtectedRoute = (args: IUseProtectedRoutesArgs) => {
  /* only execute client side */
  if (typeof window === "undefined") return

  const router = useRouter()
  const authContext = useContext(AuthContext)

  /**
   *  redirect to provided URL if user is not logged-in
   *
   */
  if (!authContext.state.token) {
    router.push(args.redirectURL)
  }
}
