import { NavigationBarContainer } from "../styles/components/NavigationBar"
import { useRouter } from 'next/router'
import Link from 'next/link'

export function NavigationBar() {
  const router = useRouter()
  
  return(
    <NavigationBarContainer>
      
      <Link href="/">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195.82 1321.02"><g id="bec33fe7-99f5-4ae1-9053-029960371f83" data-name="Camada 2"><g id="a5739496-d32e-40f6-a4d1-b5f1335e0880" data-name="Camada 1"><circle cx="597.91" cy="723.65" r="386.45" style={{fill: 'none', strokeWidth: 44}}/><circle cx="597.91" cy="725.55" r="67.45"/><rect x="763.66" y="119.56" width="133.58" height="91.46" rx="13.55" transform="translate(129.8 -310.17) rotate(22.9)"/><rect x="298.3" y="119.56" width="133.58" height="91.46" rx="13.5" transform="translate(-35.11 144.06) rotate(-21.32)"/><rect x="535.9" y="60.04" width="124.01" height="113.57"/><rect x="567.24" y="401.2" width="61.34" height="340.18"/><rect x="481.65" y="663.42" width="61.34" height="198.6" transform="translate(1054.08 20.62) rotate(70.02)"/><rect x="470.92" width="253.97" height="90.06" rx="4.01"/><path d="M597.91,125.2C267.69,125.2,0,392.89,0,723.11S267.69,1321,597.91,1321s597.91-267.7,597.91-597.91S928.12,125.2,597.91,125.2Zm0,1035.12c-241.47,0-437.21-195.75-437.21-437.21S356.44,285.9,597.91,285.9s437.21,195.74,437.21,437.21S839.37,1160.32,597.91,1160.32Z"/></g></g></svg>
        </a>
      </Link>
      
      <div className="nav">
      <button className={router.pathname === '/play-offline' ? 'active' : null}>
          <svg stroke="currentColor" fill="none" style={{strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'}} viewBox="0 0 24 24" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </button>

        <button className={router.pathname === '/leaderboard' ? 'active' : null}>
          <svg stroke="currentColor" fill="none" style={{strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'}} viewBox="0 0 24 24" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
        </button>
      </div>
    </NavigationBarContainer>
  )
}