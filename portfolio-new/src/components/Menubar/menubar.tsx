"use client";

import React, {useState} from 'react'
import Link from 'next/link'
import useStyles from './menubar.styles'

const Menubar = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <Link href="/"><span className={styles.menuItemStyle}>Home</span></Link>
      <Link href="/projects"><span className={styles.menuItemStyle}>Projects</span></Link>
      <Link href="/blogs"><span className={styles.menuItemStyle}>Blogs</span></Link>
      <Link href="/contact"><span className={styles.menuItemStyle}>Contact</span></Link>
    </div>
  )
}

export default Menubar
