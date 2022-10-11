import { useSpring } from '@react-spring/core'
import React, { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import { animated } from '@react-spring/web'
import styled from 'styled-components'

const Container = animated(styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`)

const TextContainer = animated(styled.div`
  width: 100%;
  height: 100%;
  line-height: 110px;
  color: black;
  font-size: 8em;
  font-weight: 800;
  will-change: transform, opacity;
  overflow: hidden;
`)

const Text = animated(styled.div`
  overflow: hidden;
  color: white;
  font-size: 1.7rem;
  font-family: Circular;
`)

const Logo = ({ open = true, children }) => {
  //   return <MarplacodeSVG />
  // const [open, setOpen] = useState(true)
  const styles = useSpring({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    // delay: 1000,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <Container>
      <TextContainer
        style={{
          transform: styles.x.interpolate((x) => `translate3d(0,${x}px,0)`),
        }}
      >
        <Text style={{ height: styles.height }}>{children}</Text>
      </TextContainer>
    </Container>
  )
  // return <animated.h3 style={styles}>marplacode;</animated.h3>
}

export default Logo
