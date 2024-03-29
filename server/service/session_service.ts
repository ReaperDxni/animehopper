import prisma from './database_provider'
import type { User } from '~/types/user'

const createSession = async (user: User) => {
  return await prisma.session.create({ data: { id: crypto.randomUUID(), userId: user.id, expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24) } })
}

const deleteSession = async (id: string) => {
  return await prisma.session.delete({ where: { id } })
}

const isSessionValid = async (id: string) => {
  const session = await prisma.session.findUnique({ where: { id } })
  return session && session.expiresAt > new Date()
}

export { createSession, deleteSession, isSessionValid }
