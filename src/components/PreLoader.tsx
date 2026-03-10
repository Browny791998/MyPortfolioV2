import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import styles from './Preloader.module.scss';
import { motion } from "framer-motion";

interface PreloaderProps {}

const Preloader: React.FC<PreloaderProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('Preloading complete');
      setIsLoaded(true);
    }, 2000); // Adjust timeout as needed
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    if (isLoaded) {
      tl.to('.preloader', { duration: 1, y: '-100vh', ease: 'power3.out' })
        .then(() => tl.kill());
    }
  }, [isLoaded]);

  return (
    <div className={`${styles.preloader} preloader`}>
   <motion.img
            width="100"
            height="100"
            animate={{ y: [0, -80, -100, -100, -900] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src="/images/rocket.png"
            alt="Description of your SVG"
            className={styles.rocket}
          />

          <motion.h1  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}  className={styles.preloadertext}>Let's find out about me</motion.h1>
    </div>
  );
};

export default Preloader;
