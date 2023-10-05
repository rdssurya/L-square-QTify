import React from 'react';
import CardImage from '../CardImage/CardImage';
import styles from './Card.module.css';
import Followers from '../Followers/Followers';

const Card = () => {
  return (
    <div className={styles.cardContent}>
        <div className={styles.imageContent}>   
            <CardImage />
            <div className={styles.follows}><Followers /></div>
        </div>
        <div className={styles.cardTitle}>
            New Bollywood
        </div>
    </div>
  )
};

export default Card;