import React from 'react';
import styles from './Card.module.css';
import Tooltip from '@mui/material/Tooltip/Tooltip';

const Card = (props) => {
  return (
    <div>
      {props.genre ? (
        <>
          <div className={styles.cardContent}>
            <div className={styles.imageContent}>
              <img src={props.image} alt="" className={styles.img} />
              <div className={styles.follows}>
                <div className={styles.followsDiv}>{props.likes} Likes</div>
              </div>
            </div>
            <div className={styles.cardTitle}>{props.title}</div>
          </div>
        </>
      ) : (
        <Tooltip title={`${props.songs.length} Songs`} placement="top">
          <div className={styles.cardContent}>
            <div className={styles.imageContent}>
              <img src={props.image} alt="" className={styles.img} />
              <div className={styles.follows}>
                <div className={styles.followsDiv}>{props.follows} Follows</div>
              </div>
            </div>
            <div className={styles.cardTitle}>{props.title}</div>
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default Card;






