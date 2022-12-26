import { API } from "./API"

const GetAll = async () => {
  const args = {
    url: "https://jsonplaceholder.typicode.com/users",
    error: "Failed to fetch users",
  }

  return API.get(args)
}

export const Users = {
  GetAll,
}