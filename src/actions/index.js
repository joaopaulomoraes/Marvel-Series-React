export const GET_SERIES = 'GET_SERIES'
export const GET_SERIE = 'GET_SERIE'

/* eslint-disable */ import * as marvelAPI from '../api'

/**
 * @description Get all series
 * @returns {object} A list of series data and action type
 */
export const getSeries = () => {
  return dispatch => marvelAPI.getSeries().then(series =>
    dispatch({ type: GET_SERIES, series })
  )
}

/**
 * @description Get all the details of a serie
 * @param {integer} id - Serie id
 * @returns {object} The serie data and action type
 */
export const getSerie = id => {
  return dispatch => marvelAPI.getSerie(id).then(serie =>
    dispatch({ type: GET_SERIE, serie })
  )
}
