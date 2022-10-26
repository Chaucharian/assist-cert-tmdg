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
import React, { useCallback, useEffect, useState } from 'react'
import { theme } from '@/styles'
import useStore from '@/helpers/store'
import { device, fonts } from '@/styles/theme'
import AppearingEffect from '@/components/dom/AppearingEffect'
import { Container } from '../components'
import { useScroll } from '@/helpers/hooks'
import { SECTIONS } from '@/pages'
import { Line } from '../../components'
import AttendanceForm from './components/AttendanceForm'

const Landing = () => {
  const show = true

  return (
    <Container>
      <Flex flexDirection='column' p='10px'>
        <AppearingEffect
          effect={show ? 'bottom' : 'top'}
          animationProps={{ delay: 2000, minWidth: '400px' }}
          show={show}
        >
          <img src='/img/tmdg.png' width='300' height='30'></img>
        </AppearingEffect>

        <Flex height='48px' />

        <AppearingEffect
          effect={show ? 'bottom' : 'top'}
          animationProps={{ delay: 2500, minWidth: '400px' }}
          show={show}
        >
          <Box display='inline-block'>
            <Text>Certificado de asistencia</Text>
            <Line color='white' delay={3000} play={true} />
          </Box>
        </AppearingEffect>

        <Box pt='80px'>
          <AppearingEffect
            effect={show ? 'bottom' : 'top'}
            animationProps={{ delay: 3000, minWidth: '400px' }}
            show={show}
          >
            <Box pt='20px'>
              <Text type={theme.fonts.h2}>Ingresa tus datos</Text>
            </Box>
          </AppearingEffect>

          <AttendanceForm />
        </Box>
      </Flex>
    </Container>
  )
}
export default Landing
