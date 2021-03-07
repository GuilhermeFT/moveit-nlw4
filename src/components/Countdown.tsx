import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { CountdownButton, CountdownContainer } from "../styles/components/Countdown";

export function CountDown() {
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <CountdownContainer>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </CountdownContainer>

    {hasFinished ? (
      <CountdownButton
        disabled
        isActive={isActive}
      >
      Ciclo encerrado
      </CountdownButton>
    ) : (
      <CountdownButton
        type="button"
        isActive={isActive}
        onClick={!isActive? startCountdown : resetCountdown}
      >
      {isActive ? 'Abandonar ciclo': 'Iniciar um ciclo'}
      </CountdownButton>
    )}
    
      
    
    </div>
  )
}