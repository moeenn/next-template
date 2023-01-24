import { useRouter } from "next/router"
import { useAuth } from "@/lib/hooks"

interface INavLink {
  id: number
  text: string
  href?: string
  action?: () => void
  show?: boolean
}

export const useNavLinks = () => {
  const router = useRouter()
  const auth = useAuth()

  const logoutAction = () => {
    auth.dispatch({ type: "LOGOUT" })
    router.push("/")

    // TODO: make API call to revoke token on the server
  }

  const navLinks: INavLink[] = [
    { id: 0, text: "Login", href: "/login", show: !auth.token },
    { id: 1, text: "Logout", action: logoutAction, show: !!auth.token },
    { id: 2, text: "About", href: "/about", show: true },
    { id: 3, text: "Profile", href: "/profile", show: !!auth.token },
  ]

  return { navLinks, url: router.pathname }
}
