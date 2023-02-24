import Cards from './Cards'
import './App.css'
import bb8 from './images/bb8.png'
import c3po from './images/c3po.png'
import chewbacca from './images/chewbacca.png'
import kyloRen from './images/kylo-ren.png'
import r2d2 from './images/r2d2.png'
import stormtrooper from './images/stormtrooper.png'
import { useState } from 'react';

function App() {
  const testArray = [
    {
      name: 'BB8',
      image: bb8,  
    },
    {
      name: 'C3PO',
      image: c3po,
    },
    {
      name: 'CHEWBACCA',
      image: chewbacca,  
    },
    {
      name: 'KYLO REN',
      image: kyloRen,
    },
    {
      name: 'R2D2',
      image: r2d2,  
    },
    {
      name: 'STORMTROOPER',
      image: stormtrooper,
    },
    
  ]
  const [cards, setCards] = useState(testArray);
  return (
    <div className="app">
      <header className="app-header">
        Memory Game
      </header>
      <Cards cardsArray={cards}/>
    </div>
  );
}

export default App;
