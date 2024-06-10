import React from 'react'
import styled from "styled-components"
import { useState } from "react"

const RoleDice = ( {DiceNumber,role}) => {



  return (
    <Dice onClick={role}>
         <img src={`images/dice_${DiceNumber}.png`} ></img>
         <br></br>
        <p>Click on Dice to roll</p>
    </Dice>
       
  
  )
}

export default RoleDice

const Dice=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
      // IMP

    p{
        font-size:24px;
        font-weight: 500;
    }
`