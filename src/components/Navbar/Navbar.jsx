import React, {useState} from 'react'
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
   <>
   <nav className={styles.navbar}>
    <a href="/" className={styles.title}>Portfolio</a>
    <div className={styles.menu}>
    <FontAwesomeIcon icon={faBars} fontSize="25px" color='white'alt="menuBtn"/>

        <ul className={styles.menuItems}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
   </nav>
   </>
  )
}

export default Navbar
