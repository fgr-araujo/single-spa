import React, {Fragment} from 'react'
import AsyncDecorator from 'async-decorator/rx6'
import { Scoped } from 'kremling'
import { getPeople } from '../utils/api.js'
import styles from './people-page.krem.css'
import PeopleList from '../people-list/people-list.component.js'
import SelectedPerson from './selected-person/selected-person.component.js'

@AsyncDecorator
export default class PeoplePage extends React.Component {

  state = {
    pageNum: 1,
    nextPage: true,
    loadingPeople: false,
    selectedPerson: undefined,
    people: [],
  }

  componentDidMount() {
    this.fetchPeople(this.state.pageNum)
  }

  render () {
    const { nextPage, loadingPeople, people, selectedPerson} = this.state
    return (
      <Scoped postcss={styles}>
        <div className='peoplePage'>
          <div className='peoplePageContents'>
            <div className='listWrapper'>
              {
                nextPage ? (
                  <button
                    className='brand-button margin-bottom-16'
                    onClick={this.fetchMore}
                    disabled={!this.state.nextPage || this.state.loadingPeople}
                  >
                    Fetch More people
                  </button>
                ) : null
              }
              {
                this.state.loadingPeople && people.length === 0 ? (
                  <div>
                    Loading ...
                  </div>
                ) : (
                  <PeopleList
                    people={people}
                    loadingPeople={loadingPeople}
                    selectPerson={this.selectPerson}
                  />
                )
              }
            </div>
            <div className='selectedWrapper'>
              <div className='selectedPerson'>
                <SelectedPerson
                  selectedPerson={selectedPerson}
                />
              </div>
            </div>
          </div>
        </div>
      </Scoped>
    )
  }

  selectPerson = (arrayIndex) => {
    this.setState(prev => {
      if (arrayIndex !== undefined) {
        return {
          selectedPerson: prev.people[arrayIndex]
        }
      } else {
        return null
      }
    })
  }

  fetchMore = () => {
    if (this.state.nextPage) {
      this.setState(prev => {
        return {
          pageNum: prev.pageNum + 1
        }
      }, () => {
        this.fetchPeople(this.state.pageNum)
      })
    }
  }

  fetchPeople = (pageNum = 1) => {
    if (this.state.nextPage) {
      this.setState({loadingPeople: true}, () => {
        this.props.cancelWhenUnmounted(
          getPeople(pageNum).subscribe(
            (results) => {
              this.setState(prev => {
                const people = [...prev.people, ...results.results]
                const nextPage = !!results.next
                return {people, nextPage, loadingPeople: false}
              })
            },
            (err => {
              console.log('err', err)
            })
          )
        )
      })
    }
  }
}
