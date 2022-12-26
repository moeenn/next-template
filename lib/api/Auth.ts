import { API } from "./API"
import { IForm } from "@/components/LoginDialog"

const Login = async (form: IForm) => {
  const args = {
    url: "http://localhost:5000/login",
    data: form,
  }

  return API.post(args)
}

export const Auth = {
  Login,
}