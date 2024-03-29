export default defineNuxtRouteMiddleware(async () => {
  const { refreshUserState } = useAuth()
  await refreshUserState()
})
