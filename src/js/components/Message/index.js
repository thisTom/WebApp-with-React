import React, { Component } from 'react'
import Item from './Item'
import styles from './index.scss'


const Message = ({data}) => {
  return (
    <div className={styles.root}>
      <div className={`main-color ${styles.left}`}>
        <i className={styles.ico}/>
        <span className="font-24">今日消息</span>
      </div>
      <div className={styles.right}>
        <Item data={data} />
      </div>
    </div>
  )
}

export default Message