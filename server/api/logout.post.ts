export default defineEventHandler(async (event) => {
  const header = event.headers.get('Authorization')
  if (!header) {
    return false
  }
  const token = header.replace('Bearer', '').replace(' ', '')
  const session = await event.context.prisma.session.findUnique({ where: { id: token } })
  if (!session) {
    return false
  }
  await event.context.prisma.session.delete({ where: { id: token } })
  return true
})
