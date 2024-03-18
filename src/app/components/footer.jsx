import React from 'react'
import Image from 'next/image'
import styles from '../components/styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons'


function footer() {
  return (
   <footer className={styles.footer}>
    <div className={styles.social}>
    <FontAwesomeIcon icon={faFacebook} size="lg" style={{color: "#FD5A5A",backgroundColor: "fff", borderRadius: "50%", padding: "5px"}} />
    <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#FD5A5A",backgroundColor: "fff", borderRadius: "50%", padding: "5px"}} />
    <FontAwesomeIcon icon={faYelp} size="lg" style={{color: "#FD5A5A", backgroundColor: "fff", borderRadius: "50%", padding: "5px"}} />
   </div>
<div className={styles.locations}>
<h5>LOCATIONS</h5>
<p>4403 NORTHSIDE PARKWAY ATLANTA, GA 30327</p>
</div>
<div className={styles.hours}>
<h5>HOURS</h5>
<p>WED, THUR, FRI, SAT <br /> 11:00PM - 9:00PM</p>
</div>
<div className={styles.phone}>
<h5>PHONE</h5>
<p>646-998-5034</p>
</div>

<div className={styles.footerNav}>
    <div className={styles.footerHead}>
<h2>HOME</h2>
<h2>MENU</h2>
<h2>OUR STORY</h2>
<h2>CAREERS</h2>
</div>
</div>
   </footer>
  )
}

export default footer