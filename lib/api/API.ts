export const API = {
  get: async (args: { url: string, error: string }) => {
    const res = await fetch(args.url)
    if (!res.ok) {
      throw new Error(args.error)
    }

    return res.json()
  },
  post: async (args: { url: string, data: unknown }) => {
    return new Promise((resolve, reject) => {
      fetch(args.url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(args.data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
}
