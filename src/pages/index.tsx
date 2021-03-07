import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { HomeContainer, HomeGrid } from '../styles/Pages/Home'
import { useContext } from 'react'
import { LoginBox } from '../components/LoginBox'
import { OauthProvider } from '../contexts/OauthContext'

export default function Home() {  
  return (
    <OauthProvider>
      <HomeContainer>
        <Head>
          <title>Inicio | move.out</title>
        </Head>
        <HomeGrid>
            <img src="logo/logo.svg" alt=""/>
            <strong>Bem-vindo</strong>
            <LoginBox />
        </HomeGrid>
      </HomeContainer>
    </OauthProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(process.env.FIREBASE_API_KEY);
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}