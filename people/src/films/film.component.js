import React, {Fragment} from 'react'
import { imageMap } from './film.helpers.js'

export default class Film extends React.Component {

  render () {
    const { film } = this.props
    return (
      <div className='film'>
        <img className='filmPoster' src={imageMap[film.episode_id]} alt={film.title} />
      </div>
    )
  }
}
