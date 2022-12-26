import { useAuth } from "@/lib/hooks"

export default function UserCard() {
  const auth = useAuth()

  return (
    <div>
      <>
        {!auth.user.id && (
          <div>User not set</div>
        )}
      </>

      {!!auth.user.id && (
        <div className="flex flex-col space-y-3">
          <p>id: {auth.user.id}</p>
          <p>name: {auth.user.name}</p>
          <p>email: {auth.user.email}</p>
        </div>
      )}
    </div>
  )
}