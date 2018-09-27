import React from 'react'
import { Scoped } from 'kremling'
import styles from './root.krem.css'
import { links } from './root.helper.js'

export default class Root extends React.Component {
  render () {
    return (
      <Scoped postcss={styles}>
        <div className='root navBarHeight'>
          {
            links.map((link) => {
              return (
                <a
                  className='primary-navigation-link'
                  href={link.href}
                >
                  {link.name}
                </a>
              )
            })
          }
        </div>
      </Scoped>
    )
  }
}
