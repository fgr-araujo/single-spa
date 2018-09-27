import React from 'react'
import { Scoped } from 'kremling'
import styles from './root.krem.css'

export default class Root extends React.Component {
  render () {
    return (
      <Scoped postcss={styles}>
        <div className='root'>
          Hello there
        </div>
      </Scoped>
    )
  }
}
