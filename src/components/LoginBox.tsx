import { useContext } from "react";
import { OauthContext } from "../contexts/OauthContext";
import { LoginContainer } from "../styles/components/LoginBox";

export function LoginBox() {
  const {signIn} = useContext(OauthContext)
  return(
    <LoginContainer>
      <div className="paragraph">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style={{clipPath:"url(#clip0)"}}>
        <path d="M20 0.833374C31.05 0.833374 40 9.63338 40 20.4867C40 29.1717 34.27 36.5367 26.325 39.1334C25.325 39.3184 24.9583 38.71 24.9583 38.1884C24.9583 37.7217 24.975 36.485 24.9833 34.8467C30.5467 36.0317 31.72 32.21 31.72 32.21C32.63 29.9417 33.945 29.335 33.945 29.335C35.7567 28.1167 33.805 28.1417 33.805 28.1417C31.7967 28.2784 30.7417 30.1667 30.7417 30.1667C28.9583 33.1717 26.06 32.3034 24.9167 31.8017C24.7367 30.53 24.2217 29.665 23.65 29.1734C28.0917 28.6817 32.76 26.9917 32.76 19.4617C32.76 17.3167 31.985 15.5634 30.7017 14.1884C30.9267 13.6917 31.6017 11.6934 30.5267 8.98671C30.5267 8.98671 28.8517 8.46004 25.0267 11.0017C23.4267 10.565 21.7267 10.3484 20.0267 10.3384C18.3267 10.3484 16.6267 10.565 15.0267 11.0017C11.2267 8.46004 9.55168 8.98671 9.55168 8.98671C8.47668 11.6934 9.15168 13.6917 9.35168 14.1884C8.07668 15.5634 7.30168 17.3167 7.30168 19.4617C7.30168 27.0117 11.9767 28.6734 16.4267 29.1567C15.7267 29.7467 15.0767 30.9517 15.0767 32.7934C15.0767 35.4234 15.1017 37.5367 15.1017 38.175C15.1017 38.69 14.7517 39.305 13.7267 39.1084C5.72501 36.5284 1.52588e-05 29.1584 1.52588e-05 20.4867C1.52588e-05 9.63338 8.95501 0.833374 20 0.833374Z" fill="#B3B9FF"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="40" height="40" fill="white" transform="matrix(-1 0 0 1 40 0)"/>
        </clipPath>
        </defs>
        </svg>
        <p>Faça login com seu Github para começar</p>
      </div>
      <div className="options">
        <button onClick={signIn} className="github" type="button">Logar com Github</button>
        <button className="offline">Não tenho conta no Github</button>
      </div>
    </LoginContainer>
  )
}