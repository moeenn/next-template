import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"
import { Container } from "@/components"
import { useAuth } from "@/lib/hooks"

// TODO: move to another file
interface INavLink {
  id: number
  text: string
  href?: string
  action?: () => void
}

export const Navbar = () => {
  const router = useRouter()
  const auth = useAuth()

  const logoutAction = () => {
    auth.dispatch({ type: "LOGOUT" })
    router.push("/")
  }

  const navLinks: INavLink[] = [
    { id: 0, text: "Login", href: "/login" },
    { id: 1, text: "Logout", action: logoutAction },
    { id: 2, text: "About", href: "/about" },
    { id: 3, text: "Profile", href: "/profile" },
  ]

  const linkElements = navLinks.map(link => {
    if (link.href) {
      return (
        <Link
          className={classNames({
            "px-3": true,
            "py-2": true,
            "text-xs": true,
            "rounded": true,
            "hover:bg-blue-500": true,
            "bg-blue-700": router.pathname === link.href,
          })}
          href={link.href}
          key={link.id}
        >{link.text}</Link>
      )
    }

    return (
      <button
        className="px-3 py-2 text-xs rounded hover:bg-blue-500"
        onClick={link.action}
        key={link.id}
      >{link.text}</button>
    )
  })

  return (
    <nav className="bg-blue-600 text-white py-4">
      <Container>
        <div className="flex flex-row justify-between">
          <Link href="/">
            <h1 className="text-lg">Logo</h1>
          </Link>

          <div className="flex flex-row space-x-3 my-auto">
            {linkElements}
          </div>
        </div>
      </Container>
    </nav>
  )
}