import { z } from 'zod'
import { compareString } from '~/utils/hash'

const loginRequestSchema = z.object({ name: z.string(), password: z.string() })

export default defineEventHandler(async (event) => {
  const body: z.infer<typeof loginRequestSchema> = await readBody(event)
  try {
    loginRequestSchema.parse(body)
  } catch (error) {
    setResponseStatus(event, 409)
    console.error('Invalid body', error)
    return { message: 'Please provide a valid body' }
  }
  const user = await event.context.prisma.user.findFirst({ where: { name: body.name } })
  if (!user) {
    setResponseStatus(event, 404)
    return { message: 'User not found' }
  }
  const hashedString = await compareString(body.password, user.password)
  if (!hashedString) {
    return { message: 'Invalid password' }
  }
  console.log('Creaitng session')
  const session = await lucia.createSession(user.id, {})
  appendHeader(event, 'Set-Cookie', lucia.createSessionCookie(session.id).serialize())
  return { user, sessionToken: session.id }
})
