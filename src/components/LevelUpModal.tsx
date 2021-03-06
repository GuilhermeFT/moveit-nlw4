import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { LevelUpOverlay, LevelUpContainer } from "../styles/components/LevelUpModal";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  return (
    <LevelUpOverlay>
      <LevelUpContainer>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </LevelUpContainer>
    </LevelUpOverlay>
  )
}