import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { IForm } from "@/components/LoginDialog"
import { AuthContext } from "@/lib/context/AuthContext"
import { BaseLayout } from "@/layouts/BaseLayout"
import { LoginDialog } from "@/components"
import { api } from "@/lib/api"
import { IUser } from "@/lib/types"

export default function Login() {
  const router = useRouter()
  const authContext = useContext(AuthContext)
  const mutation = useMutation((payload: IForm) => {
    return api.auth.login(payload)
  })

  useEffect(() => {
    if (mutation.isSuccess) {
      authContext.dispatch({
        type: "LOGIN",
        payload: mutation.data as { token: string; user: IUser },
      })
      router.push("/")
    }
  }, [mutation.isSuccess, mutation.data, authContext, router])

  return (
    <BaseLayout>
      <div className="lg:grid lg:grid-cols-3 mt-5">
        <div className="lg:col-span-1">
          <div className="py-4 rounded">
            {mutation.isError && (
              <div className="bg-red-200 p-2 mb-5 rounded">
                <p className="text-xs">{(mutation.error as Error).message}</p>
              </div>
            )}

            <h1 className="text-2xl mb-4">Login</h1>
            <LoginDialog
              handleSubmit={(form: IForm) => mutation.mutate(form)}
              loading={mutation.isLoading}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}
