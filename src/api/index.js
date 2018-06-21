import axios from 'axios'
import credentials from '../config'
import {
  timestamp,
  generateHash
} from '../utils'

/**
 * @description Create default instance to API calls
 * @return New Promise instance
 * @memberof MarvelAPI
 */
const MarvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts: timestamp,
    apikey: credentials.publicKey,
    hash: generateHash()
  }
})

/**
 * @description Make the call in the endpoint series
 * @return New Promise instance for series
 * @memberof MarvelAPI
 */
export const getSeries = () => {
  return MarvelAPI.get(`/series`)
}

/**
 * @description Make the call in the endpoint series/:id
 * @param id Serie id
 * @return New Promise instance for series based in Id
 * @memberof MarvelAPI
 */
export const getSerie = id => {
  return MarvelAPI.get(`/series/${id}`)
}