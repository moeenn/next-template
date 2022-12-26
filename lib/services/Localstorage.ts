export const Localstorage = {
  set(key: string, value: unknown) {
    if (typeof window == "undefined") return
    localStorage.setItem(key, JSON.stringify(value))
  },
  get<T>(key: string): T | undefined {
    if (typeof window == "undefined") return

    const valueRaw = localStorage.getItem(key)
    if (!valueRaw) return

    const value = JSON.parse(valueRaw) as T
    return value
  },
  remove(key: string) {
    if (typeof window == "undefined") return

    if (!this.get(key)) {
      console.error("cannot clear localstorage key:", key)
    }
    localStorage.removeItem(key)
  }
}