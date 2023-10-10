import React from 'react';
import styles from './AlbumsContainer.module.css';
import Button from '../Button/Button';
import AlbumsGrid from '../AlbumsGrid/AlbumsGrid';

const AlbumsContainer = () => {
  return (
    <div style={{paddingInline: '30px'}}>
        <div>
            <div className={styles.albumsTitle}>
                <h2>Top Albums</h2>
                <Button children='Collapse'/>
            </div>
            <AlbumsGrid url="https://qtify-backend-labs.crio.do/albums/top"/>
        </div>
    </div>
  );
};

export default AlbumsContainer;