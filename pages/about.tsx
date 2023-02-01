import { useQuery } from "react-query"
import { BaseLayout } from "@/layouts/BaseLayout"
import { Loader } from "@/components"
import { api } from "@/lib/api"
import { IUser } from "@/lib/types"

export default function About() {
  const users = useQuery<IUser[], Error>("users", api.users.getAll)

  return (
    <BaseLayout>
      <h1 className="text-xl mb-2">About Us</h1>
      <>{users.isLoading && <Loader size="small" />}</>

      <>
        {users.isError && (
          <span className="text-sm text-red-400">{users.error.message}</span>
        )}
      </>

      <>
        {users.data?.map((user) => (
          <div className="flex flex-row space-x-5 text-sm py-2" key={user.id}>
            <div className="flex-1">{user.name}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </>
    </BaseLayout>
  )
}
