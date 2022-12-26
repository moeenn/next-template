import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"
import { NavLinks } from "@/lib/static/NavLinks"
import { Container } from "@/components"

export const Navbar = () => {
  const router = useRouter()
  const linkElements = NavLinks.map(link => {
    return (
      <Link
        className={classNames({
          "px-2": true,
          "py-1": true,
          "text-sm": true,
          "hover:bg-gray-200": true,
          "border-b-2 border-blue-600": router.pathname === link.href,
        })}
        href={link.href}
        key={link.href}
      >{link.text}</Link>
    )
  })

  return (
    <nav className="bg-gray-100 py-4">
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