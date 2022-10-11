import React, { useRef, forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { distance } from '@/helpers/math'
import { useHover, useIsMobile, useMagneticEffect } from '@/helpers/hooks'
import { theme } from '@/styles'

const Text = styled.span`
  ${({ primaryColor, secondaryColor }) => `

  display: block;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${primaryColor ?? theme.colors.primary};
    white-space: nowrap;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.65s ${theme.transitions.easeOutCirc};
  }

  &::after {
    color: ${secondaryColor ?? theme.colors.secondary};
    transform: translate3d(-50%, 140%, 0);
  }
`}
`

const StyledButton = styled.button`
  ${({
    primaryColor,
    secondaryColor,
    fontSize = '15px',
    isHover,
    isActive,
    checkboxMode,
    buttonStyles,
    selectedTextColor,
  }) => `
  font-family: LibreFranklin;
  font-size: ${fontSize};
  position: relative;
  display: inline-flex;
  justify-content: center;
  padding: 1em 2em;
  max-width: 300px;
  max-height: 75px;
  font-weight: 200;
  line-height: 1.25;
  letter-spacing: 0.025em;
  color: ${primaryColor ?? theme.colors.primary};
  background: ${secondaryColor ?? theme.colors.secondary};
  border: 0.5px solid #cccccc;
  border-radius: 50px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.75s ${({ theme }) => theme.transitions.easeOutCirc};

  /* Text wrapper */
  > span {
    z-index: 100;
    position: relative;
    color: transparent;
  }

  &:hover {
    border-color: #cccccc;

    ${Text} {
      &::before {
        transform: translate3d(-50%, -300%, 0);
      }

      &::after {
        color: ${
          checkboxMode
            ? primaryColor ?? theme.colors.primary
            : selectedTextColor ?? secondaryColor ?? theme.colors.secondary
        };
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }

  ${
    isActive
      ? `
    border-color: #cccccc;

    ${Text} {
      &::before {
        transform: translate3d(-50%, -300%, 0);
      }

      &::after {
        color: ${selectedTextColor ?? secondaryColor ?? theme.colors.secondary};
        transform: translate3d(-50%, -50%, 0);
      }
    }

     &:hover {

    ${Text} {
   
      &::after {
        color: ${selectedTextColor};
      }
    }
  }
  `
      : ``
  }


  ${buttonStyles}
`}
`

const Fill = styled.div`
  ${({ primaryColor, isActive }) => `
  z-index: 10;
  position: absolute;
  top: -50%;
  left: -25%;
  width: 150%;
  height: 250%;
  display: block;
  border-radius: 50%;
  background: ${primaryColor ?? theme.colors.primary};
  pointer-events: none;
  transform: translate3d(0, ${isActive ? 10 : 80}%, 0);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`}
`

const Button = forwardRef(
  (
    {
      href,
      children,
      primaryColor,
      secondaryColor,
      selected,
      fontSize,
      selectedTextColor,
      onClick,
      ...props
    }: any,
    ref: any
  ) => {
    const textRef: any = useRef()
    const buttonRef: any = useRef()
    const backdropRef: any = useRef()
    const checkboxMode = typeof selected === 'boolean'

    const handleMouseEnter = () => {
      // Handle background color animation
      backdropRef.current.style.transform = `translate3d(0, 10%, 0)`
    }

    const handleMouseLeave = () => {
      backdropRef.current.style.transform = `translate3d(0, -100%, 0)`
    }

    useHover({
      ref: buttonRef,
      onMouseOver: (event) => !checkboxMode && handleMouseEnter(event),
      onMouseOut: (event) => !checkboxMode && handleMouseLeave(event),
    })
    useMagneticEffect({ containerRef: buttonRef, contentRef: textRef })

    return (
      <StyledButton
        ref={buttonRef}
        href={href}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        selectedTextColor={selectedTextColor}
        isActive={selected}
        fontSize={fontSize}
        checkboxMode={checkboxMode}
        onClick={onClick}
        {...props}
      >
        <span ref={textRef}>
          <Text data-text={children}>{children}</Text>
        </span>
        <Fill
          ref={backdropRef}
          isActive={selected}
          primaryColor={primaryColor}
        />
      </StyledButton>
    )
  }
)

export default Button
