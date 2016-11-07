import React, { Component } from 'react'
import {Flex} from 'antd-mobile'
import { Link } from 'react-router'
import styles from './index.scss'

export default class Header extends Component {
  state = {
  }
	handleClick (e) {
		document.querySelector('.'+styles.rootWrap).style.display='none';
	}
  render () {
    const {} = this.state

    return (
    	<div className={styles.rootWrap}>
	      <div className={styles.root}>
	      	<Flex align="center" justify="center">
							<img src='http://static.zoneju.com/mobile/public/img/app-closed.png'
									 onClick={this.handleClick}
									 alt=''/>

							<Link to='http://m.zoneju.com/app'>
								<img src='http://static.zoneju.com/mobile/public/img/app-logo.png'
										 alt=''/>
							</Link>	
							<div>
								<p>新用户注册送100元礼包</p>
								<p>APP下载再送100元</p>
							</div>
							<Link to='http://m.zoneju.com/app'>
								<img src='http://static.zoneju.com/mobile/public/img/app-lq.png'
									   alt=''/>
							</Link>	
					</Flex>
	      </div>
      </div>
    )
  }
}

