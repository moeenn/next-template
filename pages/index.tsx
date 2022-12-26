import { BaseLayout } from "@/layouts/BaseLayout"
import { Counter } from "@/components"

export default function Home() {
  return (
    <BaseLayout>
      <h1 className="text-xl mb-2">Home</h1>
      <Counter />
    </BaseLayout>
  )
}
