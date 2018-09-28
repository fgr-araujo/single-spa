import React from 'react'
import AsyncDecorator from 'async-decorator/rx6'
import { Scoped } from 'kremling'
import { getPeople } from '../utils/api.js'
import styles from './people-list.krem.css'

@AsyncDecorator
export default class PeopleList extends React.Component {

  state = {
    pageNum: 1,
    nextPage: true,
    loadingPeople: false,
    people: [],
  }

  componentDidMount() {
    this.fetchPeople(this.state.pageNum)
  }

  render () {
    const { nextPage, loadingPeople, people} = this.state
    return (
      <Scoped postcss={styles}>
        <div className='peopleList'>
          {
            nextPage ? (
              <button
                onClick={this.fetchMore}
                disabled={!this.state.nextPage || this.state.loadingPeople}
              >
                Fetch More people
              </button>
            ) : null
          }
          <div>
            People List
          </div>
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
