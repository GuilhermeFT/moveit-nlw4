import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { ProfileContainer } from '../styles/components/Profile'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <ProfileContainer>
      <img src="https://github.com/GuilhermeFT.png" alt="Guilherme FT"/>
      <div>
        <strong>Guilherme F. Trindade</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}</p>
      </div>
    </ProfileContainer>
  )
}