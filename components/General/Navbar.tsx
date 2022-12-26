import { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"
import { Container } from "@/components"
import { AuthContext } from "@/lib/context/AuthContext"

export const Navbar = () => {
  const router = useRouter()
  const authContext = useContext(AuthContext)

  const navLinks = [
    { text: "Login", href: "/login" },
    { text: "Logout", href: "/logout" },
    { text: "About", href: "/about" },
  ]

  const linkElements = navLinks.map(link => {
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
        key={link.href}
      >{link.text}</Link>
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