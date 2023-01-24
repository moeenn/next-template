import { Localstorage } from "@/lib/services"

export const API = {
  get: async (args: { url: string; error: string }) => {
    const res = await fetch(args.url, {
      headers: getHeaders(),
    })
    if (!res.ok) {
      throw new Error(args.error)
    }

    return res.json()
  },
  post: async (args: { url: string; data: unknown; error: string }) => {
    const res = await fetch(args.url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(args.data),
    })

    if (!res.ok) {
      throw new Error(args.error)
    }

    return res.json()
  },
}

/**
 *  if a user is logged-in, then we include the auth bearer token in all
 *  API requests made by the user to the server
 */
function getHeaders() {
  const token = Localstorage.get("next.user") as string
  return new Headers({
    "Content-type": "application/json",
    Authorization: token ?? "Bearer " + token,
  })
}
