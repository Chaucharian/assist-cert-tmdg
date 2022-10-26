import {
  Button,
  Flex,
  ArrowButton,
  Shadow,
  Text,
  TextTransitionEffect,
  Box,
} from '@/components'
import styled from 'styled-components'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { theme } from '@/styles'
import useStore from '@/helpers/store'
import { device, fonts } from '@/styles/theme'
import AppearingEffect from '@/components/dom/AppearingEffect'
import { Container } from '../components'
import { useScroll } from '@/helpers/hooks'
import lottie from 'lottie-web'
import Confetti from './components/Confetti'
import { MdDownloadForOffline } from 'react-icons/md'

const ButtonContainer = styled(Flex)`
  @media print {
    display: none;
  }
`

const Cert = () => {
  return (
    <Container
      // bg='#9b92fd'
      justifyContent='center'
      alignContent='center'
      alignItems='center'
      height='100vh'
    >
      <Confetti />

      <Flex position='relative' height='550px' width='800px'>
        <Box position='absolute' zIndex='1' top='182px' left='200px'>
          <AppearingEffect effect={'bottom'} animationProps={{ delay: 3000 }}>
            <Text type={theme.fonts.h2} color='#000'>
              Pacheco Trimarchi
            </Text>
          </AppearingEffect>
        </Box>
        <AppearingEffect effect={'bottom'} animationProps={{ delay: 2000 }}>
          <img src='/img/cert.png' height='555px' width='800px'></img>
        </AppearingEffect>
      </Flex>
      <ButtonContainer
        pt='50px'
        justifyContent='center'
        alignContent='center'
        alignItems='center'
      >
        <AppearingEffect effect={'bottom'} animationProps={{ delay: 4000 }}>
          <Button type='submit' onClick={() => window.print()}>
            Imprimir
          </Button>
        </AppearingEffect>
      </ButtonContainer>
    </Container>
  )
}
export default Cert
