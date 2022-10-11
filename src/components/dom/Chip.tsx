import React, { useRef, forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { distance } from '@/helpers/math'
import { useHover, useIsMobile } from '@/helpers/hooks'
import { theme } from '@/styles'

const Container = styled.span`
  ${({ primaryColor, secondaryColor, fontSize = '15px' }) => `
  font-family: LibreFranklin;
  font-size: ${fontSize};
  display: inline-flex;
  justify-content: center;
  padding: 8px 12px;
  max-width: 300px;
  max-height: 75px;
  font-weight: 200;
  line-height: 1.25;
  letter-spacing: 0.025em;
  color: ${primaryColor ?? theme.colors.secondary};
  background: ${secondaryColor ?? theme.colors.primary};
  border: 0.5px solid #cccccc;
  border-radius: 50px;
  user-select: none;
  overflow: hidden;
  transition: all 0.75s ${({ theme }) => theme.transitions.easeOutCirc};

`}
`

const Chip = forwardRef(
  (
    {
      href,
      children,
      primaryColor,
      secondaryColor,
      selected,
      fontSize,
      onClick,
      ...props
    }: any,
    ref: any
  ) => {
    return (
      <Container {...props} ref={ref}>
        {children}
      </Container>
    )
  }
)

export default Chip
