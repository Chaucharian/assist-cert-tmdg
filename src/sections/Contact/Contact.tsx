import { Flex, Spacer, Text, Button, Link, TextButton } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useEffect, useRef, useState } from 'react'
import Line from '@/components/dom/Line'
import { FormTextField } from '@/components/dom/Form'
import { useForm } from 'react-hook-form'
import { Container } from '../components'
import { FormCheckbox, FormRadio } from '@/components/dom/Form'
import Footer from '../Footer/Footer'
import { SECTIONS } from '@/pages'
import ContactForm from './components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Container
        bg='#1A1D22'
        minHeight='1000px'
        pt={'110px'}
        pb={'300px'}
        display='block'
        id={SECTIONS.contact}
        data-scroll
        data-scroll-sticky
        position='relative'
      >
        <Flex>
          <Flex width={{ md: '60%' }}>
            <Flex flexDirection='column'>
              <Text type={theme.fonts.h1} blendMode='difference'>
                Say hi!
              </Text>
              <Spacer vertical={theme.spacing.tiny} />
              <Text
                fontFamily='LibreFranklin'
                fontSize='40px'
                fontWeight='300'
                color='#808690'
              >
                Tell us about your idea
              </Text>
              <Spacer vertical={theme.spacing.large} />
              <ContactForm />
            </Flex>
            <Spacer vertical={theme.spacing.medium} />
          </Flex>
          {/* <Flex width='50%' height='100%' display={{ _: 'none', md: 'block' }}>
            <Flex justifyContent='center' width='100%'>
              <Link
                show={true}
                color1='grey'
                color2='white'
                onClick={startAnimation}
              >
                <Text
                  type={theme.fonts.span}
                  color='#FFF'
                  color2='#FFF'
                  fontSize={'16px'}
                >
                  Click here
                </Text>
              </Link>
            </Flex>
          </Flex> */}
        </Flex>
      </Container>
      <Footer />
    </div>
  )
}
export default Contact
