import { theme } from '@/styles'
import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import BurgerButton from '../BurgerButton'
import Logo from '../Logo'
import useStore from '@/helpers/store'
import Line from '../Line'
import { Link, Text } from '@/components/dom/'
import {
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from '@react-spring/core'
import { animated } from '@react-spring/web'
import AppearingEffect from '../AppearingEffect'
import { Spacer } from '@/components'

const Container = styled(animated.div)`
  padding: ${theme.spacing.small};
`

const Nav = styled(animated.nav)`
  display: flex;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  span {
    color: #000;
    font-size: 8px;
    font-family: Inter;
    font-weight: 100;
  }
`

const Li = styled(animated.li)`
  list-style: none;
  position: relative;

  a {
    transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
    color: rgba(164, 167, 183, 1);
    font-family: LibreFranklin;
    font-size: 50px;
    font-weight: 200;
    text-decoration: none;
    line-height: 1.3;

    &:after {
      content: attr(data-text);
      display: block;
      position: absolute;
      font-weight: 100;
      color: #fff;
      transform: skewY(7deg);
      transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
      transform-origin: left top;
      top: 105%;
    }

    &:hover {
      // color: #000;
      font-weight: 900;

      :after {
        color: #000;
        top: 10%;
        transform: skewY(0deg);
      }
    }
  }

  .line {
    position: absolute;
    transition: all ease-in-out 0.3s;
    top: 90%;
    left: 100%;
    height: 1px;
    width: 80px;
    background: #0f6dc5d6;
    mix-blend-mode: difference;
  }

  &:hover {
    .line {
      left: -50%;
    }
  }
`

const menuItems = [
  { name: 'Home', link: 'home' },
  { name: 'Services', link: 'services' },
  { name: 'Works', link: 'works' },
  { name: 'Contact', link: 'contact' },
]

const Menu = ({ show, onClick }: any) => {
  const itemClick = (index) => {
    onClick(index)
  }

  return (
    <Container>
      <AppearingEffect show={show} effect='top' blendMode='difference'>
        <Spacer vertical={theme.spacing.medium} />
        <Text type={theme.fonts.span}>Menu</Text>
        <Spacer vertical={theme.spacing.small} />
      </AppearingEffect>
      <Nav>
        <ul>
          {menuItems.map((item, index) => (
            <Li key={index}>
              <AppearingEffect
                show={show}
                effect='top'
                animationProps={{ delay: 200 * index }}
              >
                <div>
                  <span>{index + 1}.</span>
                </div>
                <a onClick={() => itemClick(index)} data-text={item.name}>
                  {item.name}
                </a>

                {/* <div className='a'></div> */}
                <div className='line'></div>
              </AppearingEffect>
            </Li>
          ))}
        </ul>
      </Nav>
      <Spacer vertical={theme.spacing.large} />
      <AppearingEffect
        show={show}
        animationProps={{ delay: show ? 350 : 0 }}
        effect='top'
        blendMode='difference'
      >
        <Text type={theme.fonts.span}>Get in touch</Text>
        <Link show={show} href='mailto:hello@marplacode.com'>
          <Text type={theme.fonts.span} fontSize={'16px'}>
            hello@marplacode.com
          </Text>
        </Link>
      </AppearingEffect>
    </Container>
  )
}

export default Menu
