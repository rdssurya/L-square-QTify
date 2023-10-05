import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div style={{padding: '31px'}}><Card /></div>
    </div>
  );
}

export default App;
