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
import { Container } from '../../components'
import { useScroll } from '@/helpers/hooks'
import lottie from 'lottie-web'
import { motion } from 'framer-motion'

const LottieContainer = styled.div`
  @media print {
    display: none;
  }
`

const Confetti = () => {
  const lottieRef = useRef()
  const [play, setPlay] = useState(false)
  const [end, setEnd] = useState(false)

  useEffect(() => {
    let timeId: any = null
    if (lottieRef.current) {
      const anim: any = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/confetti.json',
      })
      timeId = setTimeout(() => {
        setPlay(true)
        anim.play()
      }, 2000)
      anim.addEventListener('complete', () => {
        console.log('complete')
        setEnd(true)
      })
    }
    return () => clearTimeout(timeId)
  }, [])

  return (
    <LottieContainer>
      <Box
        ref={lottieRef}
        position='fixed'
        left='0'
        top='0'
        width='100%'
        height='100%'
        zIndex={20}
        opacity={0}
        animate={{
          opacity: play ? 1 : 0,
          visibility: end ? 'hidden' : 'visible',
        }}
      />
    </LottieContainer>
  )
}
export default Confetti
