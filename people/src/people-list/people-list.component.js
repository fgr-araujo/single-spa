import React, {Fragment} from 'react'
import AsyncDecorator from 'async-decorator/rx6'
import { Scoped } from 'kremling'
import { getPeople } from '../utils/api.js'
import styles from './people-list.krem.css'

@AsyncDecorator
export default class PeopleList extends React.Component {

  render () {
    const { people, loadingPeople } = this.props
    return (
      <Scoped postcss={styles}>
        <div className='peopleList'>
          <Fragment>
            {
              people.map(person => {
                return (
                  <div
                    key={person.name}
                    className='person'
                  >
                    {person.name}
                  </div>
                )
              })
            }
            {
              loadingPeople && (
                <div>
                  Loading ...
                </div>
              )
            }
          </Fragment>
        </div>
      </Scoped>
    )
  }
}
