import { theme } from '@/styles'
import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'
import { useSpring } from '@react-spring/core'
import { animated } from '@react-spring/web'
import { FC, useRef } from 'react'
import { useMagneticEffect } from '@/helpers/hooks'

const Container = styled(animated.div)`
  ${({ rotation = 0, width = 72, height = 72 }) => `
  position: relative;
  color: inherit;
  border-radius: 100px;
  cursor: pointer;
  width: ${width}px;
  height: ${height}px;
  display: flex;
  justify-content: center;
  mix-blend-mode: difference;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
`}
`

const Arrow = styled(animated(FiChevronDown))``

const ArrowButton: FC<any> = ({
  arrowAnimationProps,
  circleAnimationProps,
  rotation,
  ...props
}) => {
  const arrowAnimation = useSpring({
    from: { transform: `translateX(0) rotate(${rotation}deg)` },
    to: { transform: `translateX(90%) rotate(${rotation}deg)` },
    loop: true,
    delay: 600,
    config: {
      tension: 120,
      friction: 14,
    },
    ...arrowAnimationProps,
  })
  const circleAnimation = useSpring({
    from: {
      border: '1px solid rgba(255, 255, 255, 0.25)',
      transform: `rotate(${rotation}deg)`,
    },
    to: {
      border: '1px solid rgba(255, 255, 255, 0.99)',
      transform: `rotate(${rotation}deg)`,
    },

    loop: true,
    delay: 600,
    config: {
      tension: 120,
      friction: 14,
    },
    ...circleAnimationProps,
  })
  const ref = useRef()
  useMagneticEffect({ containerRef: ref })

  return (
    <Container style={circleAnimation} {...props} ref={ref}>
      <Arrow color='white' size={15} style={arrowAnimation} />
    </Container>
  )
}

export default ArrowButton
