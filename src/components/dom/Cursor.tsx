import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
// import useMousePosition from ' helpers/useMousePosition'
// import { lerp } from 'helpers/math'
import { useMousePosition } from '@/helpers/hooks'
import { theme } from '@/styles'

const Style = styled.svg`
  /* Hide on mobile */
  display: none;

  @media (min-width: 480px) {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    opacity: 1;
    pointer-events: none;
    backface-visibility: hidden;
    // transform: translate3d(-1em, -1em, 0);
    // transition: all 0.5s ;
    transition: transform 300ms ease-out;
    will-change: transform;

    circle {
      fill: #fff;
    }
  }

  ${({ hover }) =>
    hover &&
    `
    @media (any-pointer: fine) {

      & > circle {
      fill: #FFF;
    }
    }
  `};
`

const Cursor = ({ hover = false }) => {
  const cursorRef: any = useRef()
  // const { mouseX, mouseY } = useMousePosition()
  // const hasMovedCursor =
  //   typeof mouseX === 'number' && typeof mouseY === 'number'
  const hoverScale = 4

  useEffect(() => {
    const updateMousePosition = ({ clientX, clientY }) => {
      const bounds = cursorRef.current.getBoundingClientRect()
      const x = clientX - bounds.width / (hover ? hoverScale * 2 : 2)
      const y = clientY - bounds.height / (hover ? hoverScale * 2 : 2)

      cursorRef.current.style[
        '-webkit-transform'
      ] = `translate(${x}px,${y}px) scale(${hover ? hoverScale : 1})`
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [hover])

  return (
    <Style
      ref={cursorRef}
      hover={hover}
      width={25}
      height={25}
      viewBox='0 0 25 25'
    >
      <circle cx='12.5' cy='12.5' r='6.25' />
    </Style>
  )
}

export default Cursor
