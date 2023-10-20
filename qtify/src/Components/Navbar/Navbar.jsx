import React from 'react';
import Button from '../Button/Button';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({data}) => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <SearchBar data={data}/>
        <Button children="Give Feedback"/>
    </nav>
  )
};

export default Navbar;