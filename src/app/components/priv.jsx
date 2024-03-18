'use client'
import React,{useRef} from 'react';
import Image from 'next/image'
import styles from '../components/styles.module.scss'


export default function Priv() {
  return (
    <section className={styles.priSect}>
        <div className={styles.pri}>
        <div className={styles.priDiv}> </div>
        <h1 className={styles.priHead}>Make Your Next Event Exceptional</h1>
        <p className={styles.priPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Volutpat blandit aliquam etiam erat. Enim nunc faucibus a pellentesque. Purus non enim praesent elementum. Aliquam vestibulum morbi blandit cursus risus at ultrices.</p>
        <a className={styles.priBut} href='#'>BOOK A PRIVATE EVENT</a>
        </div>
    </section>
  )
}

