import styled from 'styled-components'

export const LoginContainer = styled.div`

  .paragraph {
    display: flex;
    align-items: center;
    color: var(--text-highlight);
    margin-bottom: 20px;

    p {
      width: 30%;
      font-size: 1.2rem;
      margin-left: 1rem;
    }
  }

  .options {
    display: flex;
    flex-direction: column;
    width: max-content;
  }

  button.github {
    border: none;
    background: linear-gradient(120deg,#4953B8 0%,rgb(57 65 150) 100%);
    color: var(--white);
    padding: 30px 30px;
    width: 22rem;
    border-radius: 8px;
    font-size: 1.2rem;
  }

  button.offline {
    margin: auto;
    border: none;
    background: transparent;
    width: max-content;
    color: var(--white);
    margin-top: 20px;
    color: #0014ff;
    text-decoration: underline;
  }
`
