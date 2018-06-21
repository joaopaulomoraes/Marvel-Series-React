import axios from 'axios'
import credentials from '../config'
import {
  timestamp,
  generateHash
} from '../utils'

const MarvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts: timestamp,
    apikey: credentials.publicKey,
    hash: generateHash()
  }
})

export const getSeries = () => {
  return MarvelAPI.get(`/series`)
}

export const getSerie = id => {
  return MarvelAPI.get(`/series/${id}`)
}