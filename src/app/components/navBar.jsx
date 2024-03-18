import React from 'react'
import Image from 'next/image'
import styles from '../components/styles.module.scss'
import Logo from '../../../public/images/Logo.png'


function navBar() {
  return (
    <>
    <div className={styles.navBar}>
        <div className={styles.navBar2}>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <Image src={Logo}
            width={75}
            height={75}
            alt='website-logo' />
            <li>Our Story</li>
            <li>Contact Us</li>
            <button className={styles.onlineBtn}>Order Online</button>
        </ul>
        </div>
        <div className={styles.lineDiv}></div>
    </div>
    </>
  )
}

export default navBar