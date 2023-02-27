import React, {useState} from "react"
import Cards from "./Cards";
import Scoreboard from "./Scoreboard";
import { shuffleArray } from "./others";
import styled from 'styled-components'
import bb8 from './images/bb8.png'
import c3po from './images/c3po.png'
import chewbacca from './images/chewbacca.png'
import kyloRen from './images/kylo-ren.png'
import r2d2 from './images/r2d2.png'
import stormtrooper from './images/stormtrooper.png'
const Main = () =>{
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
    const [clickedCards, setClickedCards] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(1);

    const [characters, setCharacters] = useState(shuffleArray(testArray));
    
    const handleCardClick = (e) => {
      const cardName = e.target.parentNode.lastChild.textContent;
      if(clickedCards.includes(cardName)){
        setCurrentScore(0);
        console.log('game lost');
        setClickedCards([]);
      }
      else{
        setClickedCards((prevState) => [...prevState, cardName]);
        const newScore = currentScore + 1;
        if(newScore > bestScore){
            setBestScore(newScore);
        }
        if(newScore === currentLevel + 2){
          const newLevel = currentLevel + 1;
          setCurrentLevel(newLevel);
        }
        setCurrentScore(newScore);
      }
      setCharacters(shuffleArray(testArray));
    }

    
    return(
      <MainWrapper>
        <Scoreboard
          currentScore = {currentScore}
          bestScore = {bestScore}
        >
        </Scoreboard>
        <Cards
            cardsArray = {characters}
            handleCardClick = {handleCardClick}
        >
        </Cards>
      </MainWrapper>
    )
}
    const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    `

export default Main;