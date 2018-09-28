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
                <div className='personName'>
                  <div className='personAttribute'>
                    <div className='attributeTitle'>
                      Name
                    </div>
                    <div>
                      {selectedPerson.name}
                    </div>
                  </div>
                </div>
                <div className='personAttribute'>
                  <div className='attributeTitle'>
                    height
                  </div>
                  <div>
                    {selectedPerson.height}
                  </div>
                </div>
                <div className='personAttribute'>
                  <div className='attributeTitle'>
                    Mass
                  </div>
                  <div>
                    {selectedPerson.mass}
                  </div>
                </div>
                <div className='personAttribute'>
                  <div className='attributeTitle'>
                    Hair color
                  </div>
                  <div>
                    {selectedPerson.hair_color}
                  </div>
                </div>
                <div className='personAttribute'>
                  <div className='attributeTitle'>
                    Gender
                  </div>
                  <div>
                    {selectedPerson.gender}
                  </div>
                </div>
                <div className='personAttribute'>
                  <div className='attributeTitle'>
                    Birth Year
                  </div>
                  <div>
                    {selectedPerson.birth_year}
                  </div>
                </div>
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
