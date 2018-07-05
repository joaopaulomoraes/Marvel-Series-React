import {
  GET_SERIES,
  GET_SERIE
} from '../actions'

const series = (state = {}, action) => {
  const {
    series,
    serie
  } = action

  switch (action.type) {
    case GET_SERIES:
      return {
        ...state,
        series: series.data.data.results
      }
    case GET_SERIE:
      return {
        ...state,
        serie: serie.data.data.results
      }
    default:
      return state
  }
}

export default series
