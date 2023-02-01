import { Localstorage } from "@/lib/services"

export const API = {
  get: async (args: { url: string }) => {
    const res = await fetch(args.url, {
      headers: getHeaders(),
    })

    const body = await res.json()

    if (!res.ok) {
      const errorMessage = body.error ?? "Failed to fetch data"
      throw new Error(errorMessage)
    }

    return body
  },
  post: async (args: { url: string; data: unknown }) => {
    const res = await fetch(args.url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(args.data),
    })

    const body = await res.json()

    if (!res.ok) {
      const errorMessage = body.error ?? "Unknown error"
      throw new Error(errorMessage)
    }

    return body
  },
}

/**
 *  if a user is logged-in, then we include the auth bearer token in all
 *  API requests made by the user to the server
 */
function getHeaders() {
  const token = Localstorage.get("next.token") as string
  return new Headers({
    "Content-type": "application/json",
    Authorization: token ?? "Bearer " + token,
  })
}
