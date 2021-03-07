import { GetServerSideProps } from "next"
import Head from "next/head"
import { ChallengeBox } from "../components/ChallengeBox"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { CountDown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { NavigationBar } from "../components/NavigationBar"
import { Profile } from "../components/Profile"
import { ChallengesProvider } from "../contexts/ChallengesContext"
import { CountdownProvider } from "../contexts/CountdownContext"
import { Container } from "../styles/Pages/PlayOffline"

interface PlayOfflineProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function PlayOffline(props: PlayOfflineProps) {
  return(
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <Container>
        <Head>
          <title>play Offline | move.out</title>
        </Head>

        <ExperienceBar />
          <NavigationBar />

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