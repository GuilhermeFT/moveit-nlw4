import { createContext, ReactNode } from "react"
import firebase from '../libs/Firebase'

interface GithubAuthContextData {
  authenticateWithGithub: () => void
}

export const GithubAuthContext = createContext({} as GithubAuthContextData)

interface GithubAuthProviderProps {
  children: ReactNode
}

export function GithubAuthProvider({children}: GithubAuthProviderProps) {
  const provider = new firebase.auth.GithubAuthProvider();

  function authenticateWithGithub() {
    firebase
  .auth()
  .signInWithRedirect(provider)
  .then((result) => {
    
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }
  return(
    <GithubAuthContext.Provider value={{authenticateWithGithub}}>
      {children}
    </GithubAuthContext.Provider>
  )
}