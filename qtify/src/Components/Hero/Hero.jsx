import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContent}>
        <div className={styles.heroText}>
            <div>
                100 Thousand Songs, ad-free
            </div>
            <div>
                Over thousands podcast episodes
            </div>
        </div>
        <HeroImage />
    </div>
  )
};

export default Hero;