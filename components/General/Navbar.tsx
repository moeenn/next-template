import Link from "next/link"
import classNames from "classnames"
import { Container } from "@/components"
import { useNavLinks } from "@/lib/hooks"

export const Navbar = () => {
  const { navLinks, url } = useNavLinks()

  const linkElements = navLinks
    .filter((link) => link.show)
    .map((link) => {
      if (link.href) {
        return (
          <Link
            className={classNames({
              "px-3 py-2 text-xs rounded hover:bg-blue-500": true,
              "bg-blue-700": url === link.href,
            })}
            href={link.href}
            key={link.id}
          >
            {link.text}
          </Link>
        )
      }

      return (
        <button
          className="px-3 py-2 text-xs rounded hover:bg-blue-500"
          onClick={link.action}
          key={link.id}
        >
          {link.text}
        </button>
      )
    })

  return (
    <nav className="bg-blue-600 text-white py-4">
      <Container>
        <div className="flex flex-row justify-between">
          <Link href="/">
            <h1 className="text-lg">Logo</h1>
          </Link>

          <div className="flex flex-row space-x-3 my-auto">{linkElements}</div>
        </div>
      </Container>
    </nav>
  )
}
