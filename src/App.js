
import './App.css';
import react from 'react';
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import data from './data';



function App() {
  const cardElements = data.map(elem => {
    return <Card 
    key={elem.id}
    {...elem}
    />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {cardElements}
      </section>
    </div>
  );
}

export default App;
