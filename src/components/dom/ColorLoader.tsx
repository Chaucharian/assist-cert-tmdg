import React, { useRef, forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { distance } from '@/helpers/math'
import { useHover, useIsMobile } from '@/helpers/hooks'
import { theme } from '@/styles'

const Container = styled.div`
  ${({ primaryColor, secondaryColor }) => `

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;

  .bg1 {
    position: absolute;
    transform-origin: top;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    transition: 1.6s;
    transition-timing-function: cubic-bezier(0,.89,.41,1);
    z-index: 101;
    transition-delay: .8s;
  }

  .bg2 { 
    position: absolute;
    transform-origin: top;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(247, 59, 0);
    transition: 1.6s;
    transition-timing-function: cubic-bezier(0,.89,.41,1);
    z-index: 102;
    transition-delay: .5s;
  }

  &.isLoaded  {
    visibility: hidden;
  }

  &.isLoaded .bg1 {
      transform: translateY(-100%);
  }
  &.isLoaded .bg2 {
      transform: translateY(-100%);
  }
}

`}
`

const ColorLoader = ({ isLoading = true, ...props }: any) => {
  const ref: any = useRef()

  useEffect(() => {
    if (!isLoading) {
      ref.current.classList.add('isLoaded')
    }
  }, [isLoading, ref])

  return (
    <Container {...props} ref={ref}>
      <div className='bg1'></div>
      <div className='bg2'></div>
    </Container>
  )
}

export default ColorLoader
