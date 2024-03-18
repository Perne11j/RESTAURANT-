import React from 'react'
import Image from 'next/image'
import styles from '../components/styles.module.scss'
import Sand from '../../../public/images/Pork-Belly-Bahn-Mi-Pickled-carrots-daikon-cucumber-fresh-mint-cilantro-and-lime-juice-Available-spicy-or-mild.jpg'

function pork() {
  return (
    <section className={styles.pork}>
        <div className={styles.poDiv}>
            <div className={styles.poHead}>
                <h1>LIGHT UP YOUR <br /> TASTEBUDS</h1>
            </div>
            <div className={styles.poPara}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Eu sem integer vitae justo eget magna fermentum iaculis eu.Volutpat lacus laoreet non curabitur gravida. Eu sem integer vitae justo eget magna fermentum iaculis eu.</p>
            </div>
            <div className={styles.poBut}>
                <a href='#'>ORDER ONLINE</a>
            </div>
        </div>
        <div className={styles.poImg}>
        <Image
            src={Sand}
            width={700}
            height={650}
            alt='pork-belly'
            className={styles.poImg}
            />
        </div>
    </section>
  )
}

export default pork