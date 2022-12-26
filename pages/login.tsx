import { useContext } from "react"
import { useMutation } from "react-query"
import { IForm } from "@/components/LoginDialog"
import { AuthContext } from "@/lib/context/AuthContext"
import { BaseLayout } from "@/layouts/BaseLayout"
import { LoginDialog } from "@/components"
import { Auth } from "@/lib/api"
import { IUser } from "@/lib/types"

export default function Login() {
  const authContext = useContext(AuthContext)
  const mutation = useMutation((payload: IForm) => {
    return Auth.Login(payload)
  })

  if (mutation.isSuccess) {
    authContext?.dispatch({
      type: "LOGIN",
      payload: (mutation.data as { token: string, user: IUser })
    })
  }

  return (
    <BaseLayout>
      <div className="lg:grid lg:grid-cols-3 mt-5">
        <div className="lg:col-span-1">
          <div className="py-4 rounded">
            <h1 className="text-2xl mb-4">Login</h1>
            <LoginDialog
              handleSubmit={(form: IForm) => mutation.mutate(form)}
              loading={mutation.isLoading}
            />

            {mutation.isError && (
              <div className="bg-red-200 p-2 rounded">
                <p className="text-xs">Login failed</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </BaseLayout>
  )
}