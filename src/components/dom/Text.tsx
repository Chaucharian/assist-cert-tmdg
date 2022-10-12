import { theme } from '@/styles'
import { device, fonts } from '@/styles/theme'
import { useSpring, UseSpringProps } from '@react-spring/core'
import { animated } from '@react-spring/web'
import styled from 'styled-components'

const StyledAndAnimatedText = ({
  transition,
  type = 'h1',
  blendMode = 'normal',
  color = '#FFF',
  fontWeight,
  fontFamily,
  fontSize,
  animate = false,
  hover,
  children,
  ...props
}: any) => {
  const StyledAndAnimated = animated(styled(type)`
    transition: ${transition};
    font-size: ${fontSize ?? fonts[type].mobile};
    color: ${color};
    font-weight: ${fontWeight ?? fonts[type].fontWeight};
    margin: 0px;
    font-family: ${fontFamily ?? fonts[type].family};

    @media ${device.desktop} {
      font-size: ${fontSize ?? fonts[type].desktop};
    }

    &:hover {
      ${hover}
    }
  `)
  return <StyledAndAnimated {...props}>{children}</StyledAndAnimated>
}

interface TextProps {
  children: string
  [x: string]: any
}

const Text = ({ children, ...props }: TextProps) => {
  return <StyledAndAnimatedText {...props}>{children}</StyledAndAnimatedText>
}
export default Text
