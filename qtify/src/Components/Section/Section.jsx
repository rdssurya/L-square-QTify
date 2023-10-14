import React, { useState } from 'react';
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';

const Section = ({title,data}) => {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggle = () => {
        setCarouselToggle(!carouselToggle);
    }

  return (
    <div style={{marginBottom: '30px'}}>
        <div className={styles.header}>
            <h3 style={{paddingLeft: '16px'}}>{title}</h3>
            <h4 onClick={handleToggle}>{!carouselToggle? <Button children={"Collapse"}/> : <Button children={"Show All"}/>}</h4>
        </div>
        { data.length === 0? (<CircularProgress />):(
        <div className={styles.cardsWrapper}>
            {!carouselToggle? (
                <div className={styles.container}>
            {data.map((album)=>(
                <Card key={album.id} image={album.image} title={album.title} follows={album.follows} songs={album.songs}/>
            ))}
            </div>):<>
            <Carousel data={data} renderComponent={(data)=> <Card key={data.id} image={data.image} title={data.title} follows={data.follows} songs={data.songs}/>}/>
            </>}
        </div>
        
        )

        }
    </div>
  );
};

export default Section;