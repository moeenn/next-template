import { BaseLayout } from "@/layouts/BaseLayout"
import { LoginDialog } from "@/components"

export default function Login() {
  return (
    <BaseLayout>
      <div className="lg:grid lg:grid-cols-3 mt-5">
        <div className="lg:col-span-1">
          <div className="py-4 rounded">
            <h1 className="text-2xl mb-4">Login</h1>
            <LoginDialog />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}