import md5 from 'md5'
import credentials from '../config'

export const timestamp = +Date.now()

export const generateHash = () => {
  return md5( timestamp + credentials.privateKey + credentials.publicKey )
}
