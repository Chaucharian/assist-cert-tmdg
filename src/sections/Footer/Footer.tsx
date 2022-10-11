import styled from 'styled-components'
import { Flex, Spacer, Text, Link, TextSplitterScroll } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AiFillHeart as AiFillHeartIcon } from 'react-icons/ai'

const MadeWithLove = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: #000;
  font-weight: lighter;
  mix-blend-mode: normal;
  font-family: LibreFranklin;
`

const Footer = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  const animate = scroll >= 0.15
  const { control, handleSubmit, formState } = useForm({})

  const marplaClick = () =>
    window.open(
      'https://www.google.com/maps/place/Mar+del+Plata,+Buenos+Aires+Province/@-38.0174831,-57.7409625,11z/data=!3m1!4b1!4m5!3m4!1s0x9584d94d19d34209:0xdd9670804bfed126!8m2!3d-38.0054771!4d-57.5426106'
    )

  return (
    <Flex
      height='100%'
      bg='#FFF'
      p={theme.spacing.small}
      flexDirection='column'
      pt={theme.spacing.medium}
      pb={theme.spacing.medium}
      position='relative'
      data-scroll
      data-scroll-delay='.5'
      data-scroll-speed='2'
      data-scroll-target='#contact'
    >
      <Flex flexDirection='column' alignItems='center'>
        {/* <TextSplitterScroll text='Have an idea?' /> */}
        <div data-scroll data-scroll-speed='2'>
          <Text type={theme.fonts.span} fontSize='30px' color='#000'>
            Have an idea?
          </Text>
        </div>
        <Spacer vertical={theme.spacing.tiny} />

        <div data-scroll data-scroll-speed='2' data-scroll-delay='0.5'>
          <Link
            show={show}
            href='mailto:hello@marplacode.com'
            color1='grey'
            color2='black'
          >
            <Text type={theme.fonts.span} color='#000' fontSize={'16px'}>
              hello@marplacode.com
            </Text>
          </Link>
        </div>
        <Spacer vertical={theme.spacing.large} />

        <MadeWithLove data-scroll data-scroll-speed='3' data-scroll-delay='0.8'>
          <AiFillHeartIcon />
          <Link show={show} color1='grey' color2='black' onClick={marplaClick}>
            <Text type={theme.fonts.span} color='#000' fontSize={'16px'}>
              Mar del Plata
            </Text>
          </Link>
        </MadeWithLove>
      </Flex>
    </Flex>
  )
}
export default Footer
