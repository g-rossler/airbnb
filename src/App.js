
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
    img={elem.coverImg}
    rating={elem.stats.rating} 
    reviewCount={elem.stats.reviewCount} 
    country={elem.location} 
    title={elem.title}
    price={elem.price}
    />
  })
  return (
    <div>
      <Navbar />
      <section className='card-list'>
        {cardElements}
      </section>
    </div>
  );
}

export default App;
