"use client";

import React, {useState} from 'react'
import Link from 'next/link'
import useStyles from './menubar.styles'
import { MenubarProps } from './menubar.interface';

const Menubar: React.FC<MenubarProps> = ({ tab }) => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <Link href="/"><span className={`${styles.menuItemStyle} ${tab==='home' && styles.activeItem}`}>Home</span></Link>
      <Link href="/projects"><span className={`${styles.menuItemStyle} ${tab==='projects' && styles.activeItem}`}>Projects</span></Link>
      <Link href="/blogs"><span className={`${styles.menuItemStyle} ${tab==='blogs' && styles.activeItem}`}>Blogs</span></Link>
      <Link href="/contact"><span className={`${styles.menuItemStyle} ${tab==='contact' && styles.activeItem}`}>Contact</span></Link>
    </div>
  )
}

export default Menubar
