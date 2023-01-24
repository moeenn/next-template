import dynamic from "next/dynamic"
import { BaseLayout } from "@/layouts/BaseLayout"
import { Loader } from "@/components"
import { useProtectedRoute } from "@/lib/hooks"

/**
 *  render component on client-side only (prevent SSR)
 *
 */
const UserCard = dynamic(() => import("@/components/UserCard"), {
  loading: () => <Loader size="small" />,
  ssr: false,
})

export default function Profile() {
  useProtectedRoute({ redirectURL: "/login" })

  return (
    <BaseLayout>
      <UserCard />
    </BaseLayout>
  )
}
