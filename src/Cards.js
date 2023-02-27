import React from "react";
import Card from "./Card";
import styled from 'styled-components'
const Cards = ({cardsArray, handleCardClick}) =>{
    const cards = cardsArray.map((card) =>(
        <Card 
            card = {card} 
            handleCardClick = {handleCardClick}
            key = {card.name}
        />
    ))

    return(
        <CardsDiv>{cards}</CardsDiv>
    )
}

const CardsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    @media (max-width: 1300px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1100px){
        grid-template-columns: repeat(2, 1fr);
    }
`
export default Cards;