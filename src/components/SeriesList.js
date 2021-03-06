import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardBody,
  Button
} from 'reactstrap'
 
const SeriesList = props => {
  const { series } = props
  
  /**
   * @description Converts title to slug
   * @param title Serie title
   * @return Sluged title to url
   * @memberof MarvelAPI
   */
  const serieDetails = title => {
    return `/series/${title.toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^\w-]+/g,'')}`
  }

  return (
    <CardColumns>
      {series && series.map(serie => (
        <Card key={serie.id}>
          <CardImg
            top
            width="100%"
            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            alt={`${serie.title}`}
          />
          <CardBody>
            <CardTitle>
              {serie.title}
            </CardTitle>
            <CardText>
              {serie.description || 'No description.'}
            </CardText>
            <Link to={`${serieDetails(serie.title)}/${serie.id}`}>
              <Button>Details</Button>
            </Link>
          </CardBody>
        </Card>
      ))}
     </CardColumns>
   )
 }

SeriesList.propTypes = {
  series: PropTypes.array.isRequired
}

export default SeriesList
