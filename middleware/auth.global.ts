export default defineNuxtRouteMiddleware((event) => {
  const { useUser } = useAuth()
  const user = useUser()
  if (event.path.startsWith('/auth') && user.value) {
    return navigateTo('/')
  }
})
