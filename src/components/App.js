import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
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
    const { loading } = this.state

    if (loading) {
      return <Loading />
    }

    return (
      <div className="app">
        <Header />
        <Router>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={SeriesList} />
              <Route exact path="/series/:title" component={SerieDetails} />
              <Route path="/series" component={SeriesList} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
