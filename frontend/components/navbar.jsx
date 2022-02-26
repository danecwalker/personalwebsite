import styles from '../styles/Navbar.module.css'

import Link from 'next/link'
import {GithubFill, LinkedinBoxFill} from 'akar-icons'
import {useRef, useEffect} from 'react'

function Navbar() {

  const nav = useRef()

  const handleScroll = () => {

  }

  useEffect(() => {
    console.log(nav)

  }, [])
  

  return (
    <nav ref={nav} id={styles.nav}>
      <div id={styles.nav_links}>
        <div id={styles.nav_group_a}>
          <div id={styles.nav_link}><Link href="/projects">Projects</Link></div>
          <div id={styles.nav_link}><Link href="#">Contact</Link></div>
        </div>
        <div id={styles.nav_group_b}>
          <div id={styles.nav_link}><Link href="/">Dane Walker</Link></div>
        </div>
        <div id={styles.nav_group_c}>
          <div id={styles.nav_link}><Link href="#"><GithubFill strokeWidth={2} size={20} /></Link></div>
          <div id={styles.nav_link}><Link href="#"><LinkedinBoxFill strokeWidth={2} size={20} /></Link></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar