import React, {Fragment} from 'react'
import { Scoped } from 'kremling'
import styles from './selected-person.krem.css'

export default class SelectedPerson extends React.Component {

  render () {
    const { selectedPerson } = this.props
    return (
      <Scoped postcss={styles}>
        <div className='selectedPerson'>
          {
            selectedPerson !== undefined ? (
              <div>
                {JSON.stringify(selectedPerson)}
              </div>
            ) : (
              <div>
                No one selected
              </div>
            )
          }
        </div>
      </Scoped>
    )
  }
}
