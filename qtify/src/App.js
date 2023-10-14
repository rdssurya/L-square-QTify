import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { useEffect, useState } from 'react';
import Section from './Components/Section/Section';
import FAQ from './Components/Accordions/Accordions';

function App() {

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  
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
  };
  fecthingSongs('https://qtify-backend-labs.crio.do/songs');


  },[]);


  return (
    <div>
      <Navbar />
      <Hero />
      <Section data={topAlbums} title={'Top Albums'} />
      <Section data={newAlbums} title={'New Albums'} />
      <Section data={songs} title={'Songs'} />
      <FAQ />
    </div>
  );
}

export default App;
