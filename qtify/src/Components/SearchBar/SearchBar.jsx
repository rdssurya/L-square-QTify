import React from 'react';
// import { ReactComponent as SearchIcon } from '../../Assets/SearchIcon.png';
import SearchIcon from '../SearchIcon/SearchIcon';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder='Search a album of your choice'/>
      <button className={styles.searchButton}>
        <SearchIcon/>
      </button>
    </form>
  )
};

export default SearchBar;