import { API } from "./API"
import { IForm } from "@/components/LoginDialog"

export const Auth = {
  Login: async (form: IForm) => {
    return API.post({
      url: "http://localhost:5000/login",
      data: form,
      error: "Invalid email or password",
    })
  },
  Logout: async () => {
    return API.get({
      url: "http://localhost:5000/logout",
      error: "Failed to logout user",
    })
  },
}
