import React, { useState } from 'react';
// import { ReactComponent as SearchIcon } from '../../Assets/SearchIcon.png';
import SearchIcon from '../SearchIcon/SearchIcon';
import SearchResults from './SearchResults';
import styles from './SearchBar.module.css';

const SearchBar = ({data}) => {
  const [val, setVal] = useState();
  const [results, setResults] = useState([]);
  const handleChange = (e) => {
    setVal(e.target.value);
    if(e.target.value===''){setResults([]);}
    else{
      const searchRes = data.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()));
      setResults(searchRes);
    }
  }
  return (
    <div style={{maxHeight: '1000px',position:'relative'}}>
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder='Search a album of your choice' value={val} onChange={handleChange}/>
      <button className={styles.searchButton}>
        <SearchIcon/>
      </button>
    </form>
    <div style={{maxHeight: '300px',overflowY:'scroll',position:'absolute',width:'100%',borderRadius:'10px'}}>
      {results.length === 0 ? <></> :
      (results.map((item)=><SearchResults title={item.title} img={item.image} desc={item.description} follows={item.follows} key={item.id}/>))
      }
    </div>
    </div>
  )
};

export default SearchBar;

