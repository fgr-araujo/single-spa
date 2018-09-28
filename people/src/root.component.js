import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import PeoplePage from './people-page/people-page.component.js'

export default class Root extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true})
  }

  render () {
    return (
      this.state.hasError ? (
        <div>
          Error
        </div>
      ) : (
        <HashRouter>
          <Route
            path='/people'
            component={PeoplePage}
          />
        </HashRouter>
      )
    )
  }
}
