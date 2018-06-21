import React from 'react'
import PropTypes from 'prop-types'

const SeriesList = props => {
  const { series } = props

  return (
    <h1>Hi, there!</h1>
  )
}

SeriesList.propTypes = {
  series: PropTypes.object.isRequired
}

export default SeriesList
