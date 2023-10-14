import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { useEffect, useState } from 'react';
import Section from './Components/Section/Section';

function App() {

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  
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
  },[]);


  return (
    <div>
      <Navbar />
      <Hero />
      <Section data={topAlbums} title={'Top Albums'} />
      {/* <Section data={newAlbums} title={'New Albums'} /> */}
    </div>
  );
}

export default App;
