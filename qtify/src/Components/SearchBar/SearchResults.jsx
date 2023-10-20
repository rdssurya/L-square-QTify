import React from 'react';
import styles from './SearchBar.module.css';

const SearchResults = ({title,img,follows,desc,key}) => {
  return (
    <div className={styles.searchResult} key={key}>
        <div style={{display:'flex',columnGap:'10px'}}>
            <img src={img} alt="album" style={{height: '40px', width:'40px'}}/>
            <div>
                <div>{title}</div>
                <div style={{
                    fontSize:'11px',
                    width:'350px', 
                    whiteSpace:'nowrap', 
                    textOverflow:'ellipsis',
                    overflow:'hidden'}}>{desc}</div>
            </div>
        </div>
        <div>{follows} Follows</div>
    </div>
  );
};

export default SearchResults;