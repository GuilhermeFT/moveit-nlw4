import { ProfileContainer } from '../styles/components/Profile'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/GuilhermeFT.png" alt="Guilherme FT"/>
      <div>
        <strong>Guilherme F. Trindade</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1</p>
      </div>
    </ProfileContainer>
  )
}