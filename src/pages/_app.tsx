import { GithubAuthProvider } from '../contexts/GithubAuthContext'
import GlobalStyle from '../styles/global'
function MyApp({ Component, pageProps }) {
  return (
    <GithubAuthProvider>
        <Component {...pageProps} />
        <GlobalStyle />
    </GithubAuthProvider>
  )
}

export default MyApp
