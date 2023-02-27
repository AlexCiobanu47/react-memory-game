import React from "react";
import styled from "styled-components";

const Scoreboard = ({currentScore, bestScore}) =>{

 return(
    <ScoreboardWrapper>
        <CurrentScore>
            Current score: {currentScore}
        </CurrentScore>
        <BestSore>
            Best score: {bestScore}
        </BestSore>
    </ScoreboardWrapper>
 )   
}

const ScoreboardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Score = styled.div`
    padding: 0.5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
`

const CurrentScore = styled(Score)`
    color: blue;
` 

const BestSore = styled(Score)`
    color: red;
`
export default Scoreboard;