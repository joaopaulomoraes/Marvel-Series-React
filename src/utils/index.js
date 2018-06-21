import md5 from 'md5'
import credentials from '../config'

/* Create new timestamp */
export const timestamp = +Date.now()

/**
 * @description Generate new md5 hashes for API requests
 * @returns A hash param to using in API call
 */
const generateHash = () => {
  return md5( timestamp + credentials.privateKey + credentials.publicKey )
}
