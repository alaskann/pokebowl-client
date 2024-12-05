import { createFileRoute } from '@tanstack/react-router'
import { JoinForm } from './-components/join-form'

export const Route = createFileRoute('/(auth)/_auth/join/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Join PokeBowl</h1>
      <JoinForm />
    </div>
  )
}
