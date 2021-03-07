import styled from 'styled-components'

export const HomeContainer = styled.div`
padding: 40px;
  background: url('/logo/clock-bg.svg') no-repeat 15px 0, var(--blue);
  background-origin: content-box;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HomeGrid = styled.div`
  margin-left:  55%;
  display: grid;
  align-items: center;

  img {
    width: 400px;
  }

  strong {
    color: var(--white);
    margin: 100px 0 40px;
    font-size: 1.8rem;
    font-weight: 500;
  }
`