import { ChallengeBoxContainer } from "../styles/components/ChallengeBox";

export function ChallengeBox() {
  const hasActiveChallenge = true
  return (
    <ChallengeBoxContainer>
      { hasActiveChallenge ? (
        <div className="challengeActive">
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button
              type="button"
              className="challengeFailedButton"
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