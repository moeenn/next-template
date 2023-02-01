import { API } from "./API"

export const users = {
  getAll: async () => {
    return API.get({
      url: "https://jsonplaceholder.typicode.com/users",
    })
  },
}
