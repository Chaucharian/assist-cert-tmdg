import { useMagneticEffect } from '@/helpers/hooks'
import React, { forwardRef, useRef, useState } from 'react'
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
  transition: all ease-in-out 1s;
`

const Svg = styled.svg`
  transition: all ease-in-out 1s;

  // &:hover {
  //   fill: #000;
  // }
`

const useAnimation = ({ play, animationProps }) => {
  const [animation, start] = useSpring(() => ({
    width: '0%',
    ...animationProps,
  }))

  if (play) {
    start({ width: '100%', delay: 2000, ...animationProps })
  } else {
    start({ width: '0%', ...animationProps })
  }

  return animation
}

const Burger = forwardRef(
  (
    {
      open,
      show = true,
      color = '#fafafa',
      onClick,
      animationProps,
      ...props
    }: any,
    ref
  ) => {
    const svgRef = useRef()
    useMagneticEffect({ containerRef: svgRef })
    const animation = useAnimation({ play: show, animationProps })
    const second = useSpring({
      transform: open
        ? 'translate(10px, 4px) rotate(45deg)'
        : 'translate(2px, 19px) rotate(0deg)',
    })
    const third = useSpring({
      transform: open
        ? 'translate(5px, 32px) rotate(-45deg)'
        : 'translate(2px, 31px) rotate(0deg)',
    })
    return (
      <Button onClick={onClick} ref={ref} {...props}>
        <Svg
          width='40'
          height='32'
          viewBox='0 0 44 44'
          fill={color}
          xmlns='http://www.w3.org/2000/svg'
          ref={svgRef}
        >
          <animated.rect
            height='4'
            rx='2'
            style={{
              ...second,
              ...animation,
            }}
          />
          <animated.rect height='4' rx='2' style={{ ...third, ...animation }} />
        </Svg>
      </Button>
    )
  }
)

export default Burger
