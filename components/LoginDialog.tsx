import { FC } from "react"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { InputError, Loader } from "@/components"
import { validators } from "@/lib/validators"

export interface IForm {
  email: string
  password: string
}

interface IProps {
  handleSubmit: (form: IForm) => void
  loading: boolean
}

export const LoginDialog: FC<IProps> = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>()
  const onSubmit = (data: IForm) => props.handleSubmit(data)

  return (
    <div>
      <form
        className="flex flex-col space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-5">
          <fieldset className="flex flex-col space-y-2">
            <label className="text-xs">Email</label>
            <input
              className="bg-gray-100 text-sm px-3 py-2 rounded"
              id="email"
              type="email"
              {...register("email", validators.email)}
            />

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <InputError message={message} />}
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-2">
            <label className="text-xs">Password</label>
            <input
              className="bg-gray-100 text-sm px-3 py-2 rounded"
              id="password"
              type="password"
              {...register("password", validators.password)}
            />

            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <InputError message={message} />}
            />
          </fieldset>
        </div>

        <button
          className="bg-blue-600 text-white text-sm px-3 py-2 rounded flex "
        >
          <div className="mx-auto flex flex-row space-x-2">
            {props.loading && <Loader size="small" />}
            <span className="my-auto">Login</span>
          </div>
        </button>
      </form>
    </div>
  )
}