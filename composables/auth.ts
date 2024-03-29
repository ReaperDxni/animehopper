import type { User } from 'lucia'

const useUser = () => {
  const user = useState<User | null>('user', () => null)
  return user
}

const useAuthenticatedUser = () => {
  const user = useUser()
  return computed(() => {
    const userValue = unref(user)
    if (!userValue) {
      throw createError('useAuthenticatedUser() can only be used in protected pages')
    }
    return userValue
  })
}

const refreshUserState = async () => {
  const user = useUser()
  const data = await useRequestFetch()('/api/user')
  if (data) {
    user.value = data
  } else {
    user.value = null
  }
}

export const useAuth = () => {
  return { useUser, useAuthenticatedUser, refreshUserState }
}
