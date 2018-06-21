import React from 'react'

const styles = {
  position: 'relative',
  bottom: 0,
  backgroundColor: '#F8F9FA',
  color: 'white',
  textAlign: 'center',
  paddingTop: 100,
  paddingBottom: 100
}

const Footer = () => {
  return (
    <div style={styles}>
      <a
        href="http://marvel.com"
        target="new"
      >
        Data provided by Marvel. © 2018 MARVEL
      </a>
    </div>
  )
}

export default Footer
