import { z } from 'zod'
import type { User } from '~/types/user'

const loginRequestSchema = z.object({ name: z.string(), password: z.string() })

export default defineEventHandler(async (event) => {
  const body: z.infer<typeof loginRequestSchema> = await readBody(event)
  try {
    loginRequestSchema.parse(body)
  } catch (error) {
    setResponseStatus(event, 409)
    return { message: 'Please provide a valid body' }
  }
  const user = await event.context.prisma.user.findFirst({ where: { name: body.name } })
  if (!user) {
    setResponseStatus(event, 404)
    return { message: 'User not found' }
  }
})
