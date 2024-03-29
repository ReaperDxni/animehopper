import { deleteSession, findSession } from '../service/session_service'

export default defineEventHandler(async (event) => {
  const header = event.headers.get('Authorization')
  if (!header) {
    return false
  }
  const token = header.replace('Bearer', '').replace(' ', '')
  const session = await findSession(token)
  if (!session) {
    return false
  }
  await deleteSession(token)
  return true
})
