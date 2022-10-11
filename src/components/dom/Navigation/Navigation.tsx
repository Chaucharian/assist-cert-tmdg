import { theme } from '@/styles'
import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import BurgerButton from '../BurgerButton'
import Logo from '../Logo'
import useStore from '@/helpers/store'
import Line from '../Line'
import Menu from './Menu'
import { device } from '@/styles/theme'
import { animated } from 'react-spring'
import {
  useScroll,
  useHover,
  useIsMobile,
  useLogoAnimation,
} from '@/helpers/hooks'
import AppearingEffect from '../AppearingEffect'
import animationLogo from 'public/marplacodeanimation.json'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import { Shadow } from '@/components'
import { SECTIONS } from '@/pages'

const NavigationContainer = styled.header`
  ${({ show, open }) => `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    // background: ${open ? '#FFF' : 'transparent'};
    backdrop-filter: blur(10px);
    transition: all cubic-bezier(0, 0, 0.2, 1) 0.5s;
    width: 100%;
    min-height: 4em;
    max-height: 100%;

    @media ${device.desktop} {
      // width: ${open ? '50vh' : '0px'}; 
    }

`}
`

const Content = styled.div`
  ${({ open }) => `
  transition: all ease-in 0.5s;
  @media ${device.mobile} {
  width: 100%;
   height: ${open ? '100vh' : '0px'}; 
  }
  visibility:  ${open ? 'visible' : 'hidden'};

  @media ${device.desktop} {
   width: ${open ? '50vh' : '0px'}; 
   height: ${open ? '100vh' : '0px'}; 
  }
`}
`

const Backdrop = styled.div`
  ${({ open }) => `
  transition: all cubic-bezier(0, 0, 0.04, 1) 0.5s;
  background: white;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  transform: ${open ? 'translateX(0%)' : 'translateX(100%)'};  
  will-change: transform;
  z-index: -1;

  @media ${device.desktop} {
    width: 100%;
    transform: ${open ? 'translateX(55%)' : 'translateX(100%)'};  
  }

`}
`

const ProgressLine = animated(styled.div`
  ${({
    color = '#FFF',
    height = 0.5,
    width = 0,
    opacity = 0,
    blendMode = 'normal',
  }) => `
    background-color: ${color};
    width: ${width}%;
    opacity: ${opacity}%;
    transition: all ease-in-out 0.5s;
    height: ${height}px;
    `}
`)

const Svg = styled.svg`
  transition: all ease-in-out 1s;
`
const Path = styled.path`
  transition: all ease-in-out 1s;
`

const Lottie = styled.div`
  ${({ open }) => `

  path {
    transition: all ease-in 0.5s;
  }

  &.black path { 
    fill: #000;
  }
  
 
`}
`

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const scrollTo = useStore((state) => state.scrollTo)
  const domReady = useStore((state) => state.domReady)
  const isMobile = useIsMobile()
  const lottieRef = useRef()
  const animate = useLogoAnimation({ lottieRef })
  const { locomotiveScroll, progress } = useScroll({
    onScroll: animate,
  })
  const whiteSection = progress >= 12 && progress <= 31

  const openHandler = () => {
    const navigationState = !open
    setOpen(navigationState)
    useStore.setState({ navigationState })
  }

  const onMenuClick = (page) => {
    openHandler()
    locomotiveScroll.scrollTo(`#${Object.keys(SECTIONS)[page]}`)
  }

  return (
    <NavigationContainer open={open} showFull={true}>
      <Backdrop open={open}>
        <Flex pl={{ _: '45px', md: '98px' }} pr={{ _: '30px', md: '98px' }}>
          <Menu show={open} onClick={onMenuClick} />
        </Flex>
      </Backdrop>
      <Flex
        justifyContent='space-between'
        height={'4em'}
        pl={{
          _: theme.spacing.horizontal.mobile,
          md: theme.spacing.horizontal.desktop,
        }}
        pr={{
          _: theme.spacing.horizontal.mobile,
          md: theme.spacing.horizontal.desktop,
        }}
      >
        <Flex alignItems='center'>
          <AppearingEffect animationProps={{ delay: 3000 }}>
            <Lottie
              ref={lottieRef}
              style={{
                width: isMobile ? 100 : 150,
                height: isMobile ? 30 : 100,
                color: '#000',
              }}
            />
          </AppearingEffect>
        </Flex>
        <BurgerButton
          color={whiteSection || open ? 'black' : 'white'}
          open={open}
          animationProps={{ delay: 2800 }}
          onClick={openHandler}
        />
      </Flex>

      {!open && (
        <ProgressLine
          color={whiteSection ? 'black' : 'white'}
          width={100}
          opacity={domReady ? 35 : 0}
        />
      )}

      {open && <Shadow height='100vh' />}
    </NavigationContainer>
  )
}

export default Navigation
