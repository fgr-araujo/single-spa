import React, {Fragment} from 'react'
import AsyncDecorator from 'async-decorator/rx6'
import { Scoped } from 'kremling'
import { getPeople } from '../utils/api.js'
import styles from './people-list.krem.css'

@AsyncDecorator
export default class PeopleList extends React.Component {

  render () {
    const { people, loadingPeople, selectPerson } = this.props
    return (
      <Scoped postcss={styles}>
        <div className='peopleList'>
          <Fragment>
            {
              people.map((person, index) => {
                return (
                  <a
                    key={person.name}
                    className='person'
                    onClick={() => selectPerson(index)}
                    onKeyPress={(evt) => this.onKeyPress(evt, index)}
                    tabIndex={0}
                  >
                    {person.name}
                  </a>
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

  onKeyPress = (evt, index) => {
    if (evt.key === 'Enter' || evt.key === ' ') {
      this.props.selectPerson(index)
    }
  }
}
