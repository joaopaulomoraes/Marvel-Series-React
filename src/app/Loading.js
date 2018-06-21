import React from 'react'
import Spinner from 'react-spinkit'

const style = {
  position: 'fixed',
  zIndex: 999,
  height: '2em',
  width: '2em',
  overFlow: 'show',
  margin: 'auto',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}

const Loading = () => {
  return (
    <Spinner style={style} name="pacman" />
  )
}

export default Loading
