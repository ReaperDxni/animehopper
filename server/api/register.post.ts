import { z } from 'zod'
import { hashString, generateSalt } from '~/utils/hash'
const registerRequestSchema = z.object({ name: z.string(), password: z.string() })

export default defineEventHandler(async (event) => {
  const body: z.infer<typeof registerRequestSchema> = await readBody(event)
  try {
    registerRequestSchema.parse(body)
  } catch (error) {
    setResponseStatus(event, 409)
    return { message: 'Please provide a valid body' }
  }
  const users = event.context.prisma.user
  const exists = await users.findFirst({ where: { name: body.name } })
  if (exists) {
    setResponseStatus(event, 403)
    return { message: 'This name is taken' }
  }
  const salt = await generateSalt(10)
  const hash = await hashString(body.password, salt)
  const result = await users.create({ data: { name: body.name, password: hash, salt } })
  return result
})
