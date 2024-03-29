/* eslint-disable no-tabs */
import { Lucia } from 'lucia'
import { PrismaAdapter } from '@lucia-auth/adapter-prisma'
import prisma from '../service/database_provider'

const adapter = new PrismaAdapter(prisma.session, prisma.user)

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    // IMPORTANT!
    attributes: {
      // set to `true` when using HTTPS
      secure: !process.dev
    }
  }
})

// IMPORTANT!
declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
	}
}
