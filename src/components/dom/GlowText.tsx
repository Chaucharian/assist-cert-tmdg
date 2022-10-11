import { theme } from '@/styles'
import { Flex } from '.'
import styled from 'styled-components'
import { useSpring } from '@react-spring/core'
import { animated } from '@react-spring/web'

const Container = styled(animated.article)`
  ${() => `
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 200% 200%;
  transition: all .5s ease;
	animation: gradient 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px transparent;
  cursor: pointer;
  display: inline;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:hover {
    background: linear-gradient(-45deg, #52ee9e, #3cbbe7, #d523c8, #e23237);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px transparent;
    cursor: pointer;
    display: inline;
  }


`}
`

const Text = styled.h1`
  ${() => `
    color: black;
    margin: 0;
    font-weight: normal;
    font-size: 60px
`}
`

const GlowText = ({
  colors1 = ['#23393E', '#A7D5FF'],
  colors2 = ['#097BE4', '#3AE2EC'],
  children,
  ...props
}) => {
  // const a1 = useSpring({
  //   from: {
  //     'background-position': '25% 75%',
  //     background: `linear-gradient(
  //   to right,
  //   ${colors1[0]},
  //   ${colors1[1]}
  // )`,
  //     '-webkit-background-clip': 'text',
  //     '-webkit-text-fill-color': 'transparent',
  //   },
  //   to: {
  //     'background-position': '0% 0%',
  //     background: `linear-gradient(
  //   to right,
  //   ${colors2[0]},
  //   ${colors2[1]}
  // )`,

  //     '-webkit-background-clip': 'text',
  //     '-webkit-text-fill-color': 'transparent',
  //   },
  //   loop: true,
  //   pause: false,
  //   config: {
  //     tension: 280,
  //     friction: 120,
  //     velocity: -0.029,
  //   },
  // })

  return (
    <Container>
      <Text {...props}>{children}</Text>
    </Container>
  )
}

export default GlowText
