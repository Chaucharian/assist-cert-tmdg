import { theme } from '@/styles'
import styled from 'styled-components'
import { Text } from '@/components/dom'

const Container = styled.div`
  :root {
    --background: #f8f8f8;
    --dark: #303032;
    --liquid: blue;
  }

  div {
    position: relative;
    background: #000;
    border: 0.25rem solid #000;
    height: 8rem;
    width: 8rem;
    outline: 0;
    overflow: hidden; /* Set to none to see fill square outside box */
  }
  div::after {
    background: #fff;
    content: 'EJEMPLO';
    /* content: "FILL";
  font-size: 2rem;
  color: white;
  font-family: Arial, Helvetica, sans-serif; */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: -50%; /* Center sauare */
    left: -50%; /* Center sauare */
    height: 200%;
    width: 200%;
    background-color: ${theme.colors.orange};
    border-radius: 35%; /* Smooth edges to appear like liquid */
    animation: spin 6s ease-in-out infinite; /* Set to forwards to freeze on last frame */
  }

  @keyframes spin {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(-100%) rotate(400deg);
    }
  }
`

const LiquidEffect = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
      <div></div>
    </Container>
  )
}

export default LiquidEffect
