'use client'
import picture from '/public/images/nate-johnston-7eISju-H38Q-unsplash.jpg'
import React,{useRef} from 'react';
import Image from 'next/image'
import styles from '../components/styles.module.scss'
import { useScroll, useTransform, motion} from 'framer-motion';


// scroll(progress => console.log(progress))

export default function index() {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    // scroll(
    //     (progress) => console.log(progress),
    //     { axis: "x" }  
    //   )

    // useTransform(value, input, output, options)
    const scale = useTransform(scrollYProgress, [0,1], [1,0])
  return (
    <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
            <div className={styles.el}>
                
                <motion.div  style={{scale: scale}} className={styles.imageContainer}>
                    <Image
                    src={picture}
                    fill
                    alt ="image"
                    placeholder='blur'
                    />
                    <div className={styles.h1text}>
                    <h1>GOOD PEOPLE.</h1>
                    <h1>GOOD VIBES.</h1>
                    </div>
                </motion.div>
               
            </div>
                <div className={styles.text}>
                    <h1>HAPPY HOUR</h1>
                </div>

                <div className={styles.ptext}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida. Eu sem integer vitae justo eget magna fermentum iaculis eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button  className={styles.clickMe}href="#">View Drink Menu</button>
                </div>
        </div>
    </div>

  )
}

