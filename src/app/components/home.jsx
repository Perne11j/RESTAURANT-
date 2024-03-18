import React from 'react'
import styles from '../components/styles.module.scss';
import CFA from '../../../public/images/full-sand.png';
import Image from 'next/image';

function home() {
  return (
    <>
    <div className={styles.homeContainer}>
    <div className={styles.home2Container}>
        <div className={styles.homeHeader}>
            <h1>JUST</h1>
            <h2>FREAKIN</h2>
            <h3>GOOD</h3>
        </div>

        <div className={styles.parker}>
        <p>Try our NEW Chicken Sandwich! Made with  fresh crispy chicken that marinated for 12 hours, serve on top is our house made spicy coleslaw, cool things off with our 2 buttery pickles, serve in between is our fresh hot soft seeded bun.</p>
        </div>

        <div className={styles.orderBtn}>
            <a href='#'><p>Order Now</p></a>
        </div>
        </div>

        <Image src={CFA}
        width={600}
        height={750}
        alt='pork-belly'
        className={styles.cfaImage} />
     </div>
    </>
  )
}

export default home