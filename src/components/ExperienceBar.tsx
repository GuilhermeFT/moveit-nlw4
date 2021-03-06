

import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { ExperienceBarHeader } from '../styles/components/ExperienceBar'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel)
  return (
    <ExperienceBarHeader>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className="currentExperience" style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarHeader>
  )
}