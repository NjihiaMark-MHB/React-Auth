import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/series')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/series"!</div>
}
