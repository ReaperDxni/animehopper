import { PrismaClient } from '@prisma/client'
import prisma from '../service/database_provider'

declare module 'h3' {
  interface H3EventContext {
    prisma: PrismaClient
  }
}

export default eventHandler((event) => {
  event.context.prisma = prisma
})
