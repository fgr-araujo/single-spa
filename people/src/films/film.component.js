import React, {Fragment} from 'react'

export default class Film extends React.Component {

  render () {
    const { film } = this.props
    return (
      <div className='film'>
        {film.title}
      </div>
    )
  }
}
