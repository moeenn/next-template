import dynamic from "next/dynamic"
import { BaseLayout } from "@/layouts/BaseLayout"
import { Loader } from "@/components"

const UserCard = dynamic(() => import("@/components/UserCard"), {
  loading: () => <Loader size="small" />,
  ssr: false
})

export default function Profile() {
  return (
    <BaseLayout>
      <UserCard />
    </BaseLayout>
  )
}