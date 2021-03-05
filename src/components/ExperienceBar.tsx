

import { ExperienceBarHeader } from '../styles/components/ExperienceBar'

export function ExperienceBar() {
  return (
    <ExperienceBarHeader>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span className="currentExperience" style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </ExperienceBarHeader>
  )
}