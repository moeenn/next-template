import { API } from "./API"
import { IForm } from "@/components/LoginDialog"

export const auth = {
  login: async (form: IForm) => {
    return API.post({
      url: "http://localhost:5000/login",
      data: form,
    })
  },
}
