import React from 'react';
import SearchIcon from '../SearchIcon/SearchIcon';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchContent}>
        <input className={styles.searchBar} type='search'placeholder='Search a album of your choice'/>
        <button className={styles.searchButton}>{<SearchIcon/>}</button>
    </div> 
  )
};

export default SearchBar;