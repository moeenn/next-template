import { API } from "./API"

export const Users = {
  GetAll: async () => {
    return API.get({
      url: "https://jsonplaceholder.typicode.com/users",
      error: "Failed to fetch users",
    })
  },
}