import { hash } from 'bcrypt'

const salt = 10
const hashString = async (value: string) => {
  return await hash(value, salt)
}
export default hashString
