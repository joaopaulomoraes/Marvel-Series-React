import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import { Container } from 'reactstrap'
import Header from '../app/Header'
import SeriesList from './SeriesList'
import SerieDetails from './SerieDetails'
import * as MarvelAPI from '../api'
import Loading from '../app/Loading'

const PageNotFound = ({ location }) => (
  <div className="not-found">
    <h5>Page <code>{location.pathname}</code> not found</h5>
  </div>
)

const styles = {
  container: {
    paddingTop: 40,
    paddingBottom: 80
  }
}

class App extends Component {
  state = {
    series: [],
    loading: true,
    error: false
  }

  async componentDidMount() {
    await MarvelAPI.getSeries()
      .then(response => {
        /*
        Destructing object to get only
        the data needed for the component
        provided by the API
        */
        const { data: { data: { results } } } = response

        this.setState({
          series: results,
          loading: false
        })
      })
      .catch( () => this.setState({ error: true }) )
  }

  render() {
    const {
      loading,
      series
    } = this.state

    if (loading) {
      return <Loading />
    }

    return (
      <div className="app">
        <Header />
        <Container style={styles.container}>
          <Router>
            <Switch>
              <Route exact path="/" component={() => <SeriesList series={series} />} />
              <Route exact path="/series/:title" component={SerieDetails} />
              <Route path="/series" component={() => <SeriesList series={series} />} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </Container>
      </div>
    )
  }
}

export default App
