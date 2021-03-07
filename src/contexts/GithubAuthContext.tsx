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
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // ...
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