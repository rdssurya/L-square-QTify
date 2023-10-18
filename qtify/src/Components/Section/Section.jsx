import React, { useState } from 'react';
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import Box from '@mui/material/Box/Box';
import Tab from '@mui/material/Tab/Tab';
import TabContext from '@mui/lab/TabContext/TabContext';
import TabList from '@mui/lab/TabList/TabList';
import TabPanel from '@mui/lab/TabPanel/TabPanel';

const Section = ({title,data,value,handleChange}) => {

    const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggle = () => {
        setCarouselToggle(!carouselToggle);
    };

  return (
    <div style={{marginBottom: '30px'}}>
        {title === "Songs" ?
        (<>
        <div className={styles.header}>
            <h3 style={{padding: '16px'}}>{title}</h3>
        </div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={(e,val) => handleChange(e,val)} aria-label="lab API tabs example">
                    <Tab label="All" value="1" style={{ color: '#fff'}}/>
                    <Tab label="Rock" value="2" style={{ color: '#fff'}}/>
                    <Tab label="Pop" value="3"  style={{ color: '#fff'}}/>
                    <Tab label="Jazz" value="4"  style={{ color: '#fff'}}/>
                    <Tab label="Blues" value="5"  style={{ color: '#fff'}}/>
                </TabList>
                </Box>
                <TabPanel value={value} style={{paddingInline:'0px'}}>
                { data.length === 0? (<CircularProgress />):(
                <div className={styles.cardsWrapper}>
                    <Carousel data={data} renderComponent={(data)=> <Card key={data.id} image={data.image} title={data.title} likes={data.likes} songs={data.songs} genre={data.genre}/>}/>
                </div>)}
                </TabPanel>
            </TabContext>
         </Box>
        </>)
        :(
        <>
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
        </div>)}</>)
        }
    </div>
  );
};

export default Section;