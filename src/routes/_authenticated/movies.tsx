import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/movies')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/movies"!</div>
}
