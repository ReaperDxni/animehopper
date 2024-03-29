import { hash, compare, genSalt } from 'bcrypt'

const generateSalt = async (rounds: number) => await genSalt(rounds)

const hashString = async (value: string, salt: string) => {
  return await hash(value, salt)
}

const compareString = async (value: string, hash: string) => {
  return await compare(value, hash)
}

export { hashString, compareString, generateSalt }
