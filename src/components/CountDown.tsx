import { useState, useEffect } from "react";
import { CountdownButton, CountdownContainer } from "../styles/components/CountDown";

export function CountDown() {
  const [time, setTime] = useState(6);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }
  function resetCountdown() {
    setIsActive(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time -1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
    
  }, [isActive, time])

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