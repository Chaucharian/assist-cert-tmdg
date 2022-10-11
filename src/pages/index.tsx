import dynamic from 'next/dynamic'
import React, { useEffect, useRef } from 'react'
import useStore from '@/helpers/store'
import { canvasProps } from '@/scenes/MarplaJourney'
import Navigation from '@/components/dom/Navigation/Navigation'
import { Contact, Landing, Works } from '@/sections'
import Whyus from '@/sections/Whyus/Whyus'
import styled from 'styled-components'
import ColorLoader from '@/components/dom/ColorLoader'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const Section = styled.section`
  ${({ height = '100vh' }) => `
`}
`

export enum SECTIONS {
  landing = 'landing',
  whyus = 'whyus',
  works = 'works',
  contact = 'contact',
}

const Page = (props) => {
  const video = useRef(null)
  const videoUrl = useStore((state) => state.videoUrl)
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

  return (
    <>
      <ColorLoader isLoading={false} />

      <Landing />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Marplacode | Creative Agency',
    },
  }
}
