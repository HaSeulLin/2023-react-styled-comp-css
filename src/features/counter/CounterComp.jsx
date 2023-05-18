import React from 'react'
// module.css로 바꿔서 div에 적용시키기
import styles from './counter.module.css'

export default function CounterComp() {
  return (
    <div>
        <h3 className={`${styles.color} ${styles.font}`}>
          {styles.color}, {styles.font}
        </h3>
        <a className={`${styles.color} App-link`} href="">app에 있는 css 가져오기</a>
        <p className='App-link'>현재 모듈에서 쓰는 css와 공통 css를 함께 적용 할 수 있다</p>
    </div>
  )
}
