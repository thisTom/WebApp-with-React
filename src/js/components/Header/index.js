import React, { Component } from 'react'
import {Flex} from 'antd-mobile'
import { Link } from 'react-router'
import styles from './index.scss'

export default class Header extends Component {
  state = {

  }

  render () {
    const {} = this.state

    return (
      <Flex  align="center" justify="between" className={styles.root}>
        <Link to='/'>
          <img src='http://static.zoneju.com/mobile/public/img/logo.png'
           		 alt=''/>
        </Link>
				<div>
					<Link to='#' className={`${styles.toUser} icon`}>
					</Link>
					<Link to='#' className={`${styles.toSearch} icon`}>
					</Link>
				</div>
      </Flex>
    )
  }
}

