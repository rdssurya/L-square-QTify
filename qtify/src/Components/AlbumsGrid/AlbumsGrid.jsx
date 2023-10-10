import React, {useEffect, useState} from 'react';
import Card from '../Card/Card';
import styles from './AlbumsGrid.module.css';

const AlbumsGrid = (props) => {
    const [topAlbums, setTopAlbums] = useState([]);
  
    useEffect(()=>{
        const fecthingAlbums = async (url) => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setTopAlbums([...jsonData]);
        };
        fecthingAlbums(props.url);
    },[props.url]);

    

    return (
        <div className={styles.container}>
            {topAlbums.map((album)=>(
                <Card key={album.id} image={album.image} title={album.title} follows={album.follows}/>
            ))}
        </div>
    );
};

export default AlbumsGrid;