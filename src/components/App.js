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
import Loading from '../app/Loading'
import Footer from '../app/Footer'
import Error from './Error'
import { connect } from 'react-redux'
import { getSeries } from '../actions'

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

  /**
   * @description Persist the data in the route: series until the asynchronous obtaining of the data
   * @memberof App
   */
  async componentDidMount() {
    await this.props.getSeries()
      .then(this.setState({
        loading: false 
      }))
      .catch(() =>
        this.setState({
          error: true
        })
      )
  }

  render() {
    const {
      loading,
      error,
    } = this.state

    const { series } = this.props

    if (loading) {
      return <Loading />
    }
    
    return (
      !error ? (
        <div className="app">
          <Header />
            <Container style={styles.container}>
              <Router>
                <Switch>
                  <Route exact path="/" component={() => <SeriesList series={series ? series : []} />} />
                  <Route exact path="/series/:title/:id" component={SerieDetails} />
                  <Route path="/series" component={() => <SeriesList series={series ? series : []} />} />
                  <Route component={PageNotFound} />
                </Switch>
              </Router>
            </Container>
          <Footer />
        </div>
      ) : <Error />
    )
  }
}

const mapStateToProps = ({ series }) => {
  return {
    series
  }
}

const mapDispatchToProps = dispatch => ({
  getSeries: () => dispatch(getSeries())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
