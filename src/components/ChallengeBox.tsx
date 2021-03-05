import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ChallengeBoxContainer } from "../styles/components/ChallengeBox";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <ChallengeBoxContainer>
      { activeChallenge ? (
        <div className="challengeActive">
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className="challengeFailedButton"
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className="challengeSucceededButton"
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="challengeNotActive">
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>
      ) }
    </ChallengeBoxContainer>
  )
}