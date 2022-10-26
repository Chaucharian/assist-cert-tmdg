import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'
import useStore from '@/helpers/store'

import Navigation from '@/components/dom/Navigation/Navigation'
import { Landing } from '@/sections'
import styled from 'styled-components'
import ColorLoader from '@/components/dom/ColorLoader'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Cert from '../sections/Cert/Cert'
import { Flex, Box, Text } from '@/components'
import AppearingEffect from '@/components/dom/AppearingEffect'
import { theme } from '@/styles'

const MarplacodeBannerContainer = styled.div`
  @media print {
    display: none;
  }
`

export enum SECTIONS {
  landing = 'landing',
  whyus = 'whyus',
  works = 'works',
  contact = 'contact',
}

const Page = (props) => {
  const video = useRef(null)
  const showCert = useStore((state) => state.showCert)
  const containerRef = useRef(null)
  // const { pathname } = useRouter()
  // const path = pathname.split('?')[0]

  useEffect(() => {
    if (video.current) {
      useStore.setState({
        video,
      })
    }
  }, [video])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      <ColorLoader isLoading={loading} />
      {showCert ? <Cert /> : <Landing />}
      <MarplacodeBannerContainer>
        <Box position='fixed' right='10%' bottom='10px'>
          <AppearingEffect
            effect={true ? 'bottom' : 'top'}
            animationProps={{ delay: 4000, minWidth: '400px' }}
            show={true}
          >
            <Flex justifyContent='flex-end' alignContent='center' pt='12px'>
              <Box mr='4px'>
                <Text type={theme.fonts.span}>proudly built by</Text>
              </Box>

              <a href='https://www.marplacode.com' target='_blank'>
                <img src='/img/marplacodesvg.svg' width='20px' height='20px' />
              </a>
            </Flex>
          </AppearingEffect>
        </Box>
      </MarplacodeBannerContainer>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'TMDG x Marplacode; | Certificates',
    },
  }
}
