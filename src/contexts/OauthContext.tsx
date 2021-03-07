import axios from "axios";
import { createContext } from "react";

interface OauthContextData {
  signIn: () => void
}

export const OauthContext = createContext({} as OauthContextData)

export function OauthProvider({children}) {
  async function signIn() {
    const log = await axios.post('/api/signup')
    console.log(log);
    
  }

  return (
    <OauthContext.Provider value={{
      signIn
    }}>
      {children}
    </OauthContext.Provider>
  )
}