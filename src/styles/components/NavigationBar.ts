import styled from 'styled-components'

export const NavigationBarContainer = styled.div`
  position: fixed;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:0;

  img {
    width: 80px;
    height: 80px;
    padding: 10px;
    background: var(--blue);
    border-radius: 10px;
  }

  a {
    padding: 15px;

    svg {
      width: 50px;
      fill: var(--blue);
      stroke: var(--blue);
    } 
  }

  .nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .active {
      cursor: initial;
      svg {
        stroke: var(--blue);
      }

      ::after {
        top: 5px;
        bottom: 5px;
      }
    }

    button {
      position: relative;
      width: 100%;
      border: none;
      background: none;
      height: 70px;
      transition: background 0.2s ease-in-out;

      svg {
        stroke: var(--text);
        transition: stroke 0.2s ease-in-out;
      }

      :hover:not(.active) {
        background: var(--background);

        ::after {
          top: 10px;
          bottom: 10px;
        }
      }

      ::after {
        content: '';
        position: absolute;
        background: var(--blue);
        border-radius: 0 5px 5px 0;
        top: 50%;
        bottom: 50%;
        left: 0;
        width: 5px;
        transition: bottom 0.2s ease-in-out, top 0.2s ease-in-out;
      }
    }
  }
`