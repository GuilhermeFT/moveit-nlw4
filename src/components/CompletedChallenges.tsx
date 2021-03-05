import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ContainerChallenges } from "../styles/components/CompletedChallenges";

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <ContainerChallenges>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </ContainerChallenges>
  )
}