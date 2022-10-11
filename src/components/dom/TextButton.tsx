import { theme } from '@/styles'
import { FC } from 'react'
import styled from 'styled-components'
import Text from './Text'

const StyledButton = styled.button`
  ${({ width = 250 }) => `
  background: transparent;
  padding: 20px;
  color: inherit;
  border: 0px;
  font: inherit;
  cursor: pointer;
  width: ${width}px;
  outline: inherit;
  color: white;

  background-image: linear-gradient(#1095c1 0 0);
  background-size: 200% .08em;
  background-position: 200% 100%;
  background-repeat: no-repeat;
  transition: background-size .3s, background-position .3s .3s;

  &:hover {
    transition: background-size .3s .3s, background-position .3s;
    background-size: 200% 100%;
    background-position: 100% 100%;
  }
`}
`

const TextButton: FC<any> = ({ textProps, children, ...props }) => {
  return (
    <StyledButton {...props}>
      <Text fontFamily={'Akira'} fontSize='40px' color='white' {...textProps}>
        {children}
      </Text>
      <span></span>
    </StyledButton>
  )
}

export default TextButton
