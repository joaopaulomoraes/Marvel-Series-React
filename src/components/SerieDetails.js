import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardLink,
  Badge
} from 'reactstrap'
import Loading from '../app/Loading'
import * as MarvelAPI from '../api'
import SerieListItem from './SerieListItem'

class SerieDetails extends Component {
  state = {
    serie: [],
    loading: true
  }

  async componentDidMount() {
    /*
      Destructing object to get only
      the param needed for the component
      provided by the match router
      */
    const { match: { params: { id } } } = this.props

    await MarvelAPI.getSerie(id)
    .then(response => {
      const { data: { data: { results } } } = response

      this.setState({
        serie: results,
        loading: false
      })
    })
  }

  render() {
    const {
      loading,
      serie
    } = this.state

    if (loading) {
      return <Loading />
    }

    return (
      <div className="serie-details">
        {serie && serie.map(serie =>
          <Card key={serie.id}>
            <CardBody>
              <CardTitle style={{fontSize: 42}}>
                {serie.title}
              </CardTitle>
              <CardSubtitle>
                <Badge color="success" pill style={{marginRight: 5}}>Start year {serie.startYear}</Badge>
                <Badge color="danger" pill style={{marginRight: 5}}>End year {serie.endYear}</Badge>
                <Badge color="primary" pill style={{marginRight: 5}}>Rating {serie.rating}</Badge>
                <Badge color="warning" pill style={{marginRight: 5}}>Type {serie.type}</Badge>
              </CardSubtitle>
              <CardText style={{marginTop: 10}}>
                {serie.description || 'No more description.'}
              </CardText>
            </CardBody>
            <CardImg
              top
              src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
              alt={`${serie.title}`}
            />
            <CardBody>
              <CardTitle>
                Creators
              </CardTitle>
              <SerieListItem
                style={{marginBottom: 10}}
                objectItems={serie.creators}
              />
            </CardBody>
            <CardBody>
              <CardTitle>
                Stories
              </CardTitle>
              <SerieListItem
                style={{marginBottom: 10}}
                objectItems={serie.stories}
              />
            </CardBody>
            <CardBody>
              <CardTitle>
                Comics
              </CardTitle>
              <SerieListItem
                style={{marginBottom: 10}}
                objectItems={serie.comics}
              />
            </CardBody>
            <CardBody>
              <CardLink
                href={`${serie.urls[0].url}`}
                target="new"
              >
                Marvel details
              </CardLink>
            </CardBody>
          </Card>
        )}
      </div>
    )
  }
}

export default SerieDetails
