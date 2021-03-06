import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Container } from '../styles/Pages/Home'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <Container>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
        </CountdownProvider>
      </Container>
   </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}