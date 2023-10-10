import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.cardContent}>
        <div className={styles.imageContent}>   
            <img src={props.image} alt="" className={styles.img}/>
            <div className={styles.follows}>
              <div className={styles.followsDiv}>{props.follows} Follows</div>
            </div>
        </div>
        <div className={styles.cardTitle}>
            {props.title}
        </div>
    </div>
  )
};

export default Card;