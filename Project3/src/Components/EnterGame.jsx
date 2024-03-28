import React from 'react'
import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, Outline } from './Button'
import styled from 'styled-components'
import Rules from './Rules'
const EnterGame = () => {

  const[DiceNumber,SetDiceNumber]=useState(1);
  const [SelectedNumber,SetSelectedNumber]=useState();
const[Error,SetError]=useState("");
const[score,SetScore]=useState(0);

const[rulesvisible,setrulesvisible]=useState(false);

  function genereateRandomNumber(){
    var num=Math.floor(Math.random()*5)+1;
    return num;
}
  function role(){

    if(!SelectedNumber){
    SetError("You have not selected any number");
    return;
    }
    else{
      var num=genereateRandomNumber();
      SetDiceNumber((prev)=>num);
       SetSelectedNumber();
      netScore();
    }

}

function netScore(){
  if(DiceNumber===SelectedNumber){
      SetScore((prev)=>prev+DiceNumber)
  }
  else{
    SetScore((prev)=>prev-1);
  }
}




  return (
    <>
  <div>

 
    <div style={{ margin: '50px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding:' 6px 70px' }}>
      <TotalScore score={score}></TotalScore>
      <SelectNumber  Error={Error}  SetError={SetError} SetSelectedNumber={SetSelectedNumber}  SelectedNumber={SelectedNumber}   ></SelectNumber>
    </div>
  


    <RoleDice    DiceNumber={DiceNumber} role={role}   ></RoleDice>
  
    <div style={{display: 'flex',   margin: ' 10px auto', maxWidth: '228.78px',  justifyContent: 'center',  flexDirection: 'column',gap:'10px',height:'180px'}}>
    
    <Outline onClick={()=>{
      SetScore(0);
    }} >New Game</Outline>
    <Button  onClick={()=>{
      setrulesvisible((prev)=>!prev)
    }} > {rulesvisible?"Hide Rules":"Show Rules"}  </Button>

    </div>

    { rulesvisible&& <Rules></Rules>}
    

    </div>
          
    </>
  )
}


export default EnterGame