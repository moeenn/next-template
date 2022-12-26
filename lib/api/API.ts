export const API = {
  get: async (args: { url: string, error: string}) => {
    const res = await fetch(args.url)
    if (!res.ok) {
      throw new Error(args.error)
    }
  
    return res.json()
  },
}
