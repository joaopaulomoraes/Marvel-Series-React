import React from 'react'
import PropTypes from 'prop-types'
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'

const SerieListItem = props => {
  const { objectItems } = props
  return (
    <ListGroup>
      {objectItems && objectItems.items.map((item, i) =>
        <ListGroupItem key={i}>
          {item.name}
        </ListGroupItem>
      )}
    </ListGroup>
  )
}

SerieListItem.propTypes = {
  objectItems: PropTypes.object.isRequired
}

export default SerieListItem
