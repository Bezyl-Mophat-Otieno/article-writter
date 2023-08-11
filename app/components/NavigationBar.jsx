import React from 'react'
import styles from './NavigationBar.module.css'

function NavigationBar({children}) {
  return (
    <div classname={styles.mainNav}>
        <button className={styles.navLinks}>Home</button>
        <button className={styles.navLinks}>About</button>
        <button className={styles.navLinks}>Articles</button>
        <button className={styles.navLinks}>Books</button>

    </div>
  )
}

export default NavigationBar