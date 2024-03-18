'use client'

import Image from "next/image";
import React from 'react';
import TBun from "../../public/images/top-bun.png";
import Chick from "../../public/images/Chicken.png";
import BBun from "../../public/images/bottom-bun.png";
import Full from "../../public/images/full-sand.png";
import Pic from '../app/components/index'
import Priv from './components/priv'
import Pork from './components/pork'
import Footer from './components/footer'
import Header from './components/home';
import NavBar from './components/navBar';

// import { motion, useScroll, useSpring, MotionValue, useTransform } from "framer-motion"






  

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }
// console.log(product[0].src)


// function Dojo() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section className="flex-col w-screen">
//   <div>
//   <div className="flex">
//         <h1 className="text-7xl w-screen">FRESH</h1>
//         <Image
//   src={product[0].src}
//   alt={product[0].alt}
//   width={400}
//   height={400}
//   />
//       </div>
 
  {/* <Image
  src={product[1].src}
  alt={product[1].alt}
  width={400}
  height={400}
  /> */}

            {/* <div className="flex">
        <h1 className="text-7xl w-screen">ORAGNIC</h1>
        <Image
  src={product[1].src}
  alt={product[1].alt}
  width={400}
  height={400}
  />
      </div> */}
 
  {/* <Image
  src={product[1].src}
  alt={product[1].alt}
  width={400}
  height={400}
  /> */}
            {/* </div>
    </section>
  );
} */}




export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });


return (
  <>
     
     <NavBar />
     <Header />
     <Pic />
     <Priv />
     <Pork />
     <Footer />
      {/* <motion.div className="progress" style={{ scaleX }} /> */}
    </>
)}
