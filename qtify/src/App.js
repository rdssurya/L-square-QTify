import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { useEffect, useState } from 'react';
import Section from './Components/Section/Section';
import FAQ from './Components/Accordions/Accordions';

function App() {
  const [value,setValue] = useState('1');
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [allSongs,setAllSongs] = useState([]);
  const handleChange = (e,val) =>{
    setValue(val);
  }
  useEffect(()=>{
      const fecthingTopAlbums = async (url) => {
          const response = await fetch(url);
          const jsonData = await response.json();
          setTopAlbums([...jsonData]);
      };
      fecthingTopAlbums('https://qtify-backend-labs.crio.do/albums/top');

      const fecthingNewAlbums = async (url) => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setNewAlbums([...jsonData]);
    };
    fecthingNewAlbums('https://qtify-backend-labs.crio.do/albums/new');

    const fecthingSongs = async (url) => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setSongs([...jsonData]);
      setAllSongs([...jsonData]);
  };
  fecthingSongs('https://qtify-backend-labs.crio.do/songs');
  },[]);

  useEffect(()=>{
    if(value === '1'){
        setSongs([...allSongs]);
    }
    if(value === '2'){
        setSongs([...allSongs.filter((song)=>song.genre.key === 'rock')]);
    }
    if(value === '3'){
        setSongs([...allSongs.filter((song)=>song.genre.key === 'pop')]);
    }
    if(value === '4'){
        setSongs([...allSongs.filter((song)=>song.genre.key === 'jazz')]);
    }
    if(value === '5'){
        setSongs([...allSongs.filter((song)=>song.genre.key === 'blues')]);
    }
  },[value,allSongs]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section data={topAlbums} title={'Top Albums'} />
      <Section data={newAlbums} title={'New Albums'} />
      <Section data={songs} title={'Songs'} handleChange={handleChange} value={value}/>
      <FAQ />
    </div>
  );
}

export default App;
