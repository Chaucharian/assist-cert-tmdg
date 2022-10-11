import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const Button = styled.button`
  display: block;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  width: 40px;
  border: none;
  padding: 0;
  margin: 0;
`

const OpenButton = ({ open, onClick }: any) => {
  const first = useSpring({
    transform: open
      ? 'translate(40px, 23px) rotate(180deg)'
      : 'translate(20px, 0px) rotate(90deg)',
  })
  const second = useSpring({
    transform: 'translate(0px, 20px)',
  })

  return (
    <Button onClick={onClick}>
      <svg width='20' height='20' viewBox='0 0 40 40' fill='#000'>
        <animated.rect height='3' rx='2' width='100%' style={first} />
        <animated.rect height='3' rx='2' width='100%' style={second} />
      </svg>
    </Button>
  )
}

export default OpenButton
