import React from 'react'
import PeopleList from './people-list/people-list.component.js'

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
        <PeopleList />
      )
    )
  }
}
