import React from 'react'
import { Alert } from 'reactstrap'

const error = {
  textAlign: 'center'
}

const Error = () => {
  return (
    <div style={error}>
      <Alert color="danger">
        Error to load data from API. 😅
      </Alert>
    </div>
  )
}

export default Error
