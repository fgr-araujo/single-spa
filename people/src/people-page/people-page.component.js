import React, {Fragment} from 'react'
import AsyncDecorator from 'async-decorator/rx6'
import { Scoped } from 'kremling'
import { getPeople } from '../utils/api.js'
import styles from './people-page.krem.css'
import PeopleList from '../people-list/people-list.component.js'

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
    const { nextPage, loadingPeople, people} = this.state
    return (
      <Scoped postcss={styles}>
        <div className='peoplePage'>
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
          <div className='peoplePageContents'>
            <div className='listWrapper'>
              {
                this.state.loadingPeople && people.length === 0 ? (
                  <div>
                    Loading ...
                  </div>
                ) : (
                  <PeopleList people={people} loadingPeople={loadingPeople} />
                )
              }
            </div>
            <div className='selectedWrapper'>
              <div className='selectedPerson'>
                Selected Person
              </div>
            </div>
          </div>
        </div>
      </Scoped>
    )
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
