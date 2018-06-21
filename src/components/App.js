import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Header from '../app/Header'
import SeriesList from './SeriesList'
import SerieDetails from './SerieDetails'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Router>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={SeriesList} />
              <Route exact path="/series/:title" component={SerieDetails} />
              <Route path="/series" component={SeriesList} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
