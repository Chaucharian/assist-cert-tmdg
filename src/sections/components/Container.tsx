import styled from 'styled-components'
import { Flex, Spacer, Text } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import React from 'react'

const ContainerStyled = styled(Flex)`
  ${({
    shadow,
    blur = 3,
    gradient = 'linear-gradient(#00000000, #000000)',
  }) => `

  ${
    shadow
      ? `
    background-image: ${gradient};
    backdrop-filter: blur(${blur}px);`
      : ``
  }
  
`}
`

const Container = ({ children, ...props }) => {
  return (
    <ContainerStyled
      flexDirection='column'
      justifyContent='center'
      pl={{
        _: theme.spacing.horizontal.mobile,
        md: theme.spacing.horizontal.desktop,
      }}
      pr={{
        _: theme.spacing.horizontal.mobile,
        md: theme.spacing.horizontal.desktop,
      }}
      height='100%'
      {...props}
    >
      {children}
    </ContainerStyled>
  )
}
export default Container
