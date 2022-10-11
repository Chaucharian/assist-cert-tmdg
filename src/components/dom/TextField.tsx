import { useRef, useState } from 'react'
import styled from 'styled-components'
import { Flex, Line } from '.'

const StyledTextField = styled.input`
  font-family: 'LibreFranklin';
  font-weight: 200;
  font-size: 16px;
  outline: 0;
  color: #fff;
  padding: 15px 0px 15px 8px;
  border: 0px;
  background: none;
  margin: 0px;
  display: block;
  min-width: 0px;
  width: 100%;
  transition: all ease-in 3s;

  &::placeholder {
    color: #fff;
    opacity: 0.8;
  }

  &:hover {
    &::placeholder {
      opacity: 1;
    }
  }
`

const StyledTextAreaField = styled.textarea`
  font-family: 'LibreFranklin';
  font-weight: 200;
  font-size: 16px;
  outline: 0;
  color: #fff;
  padding: 15px 0px 15px 8px;
  border: 0px;
  background: none;
  margin: 0px;
  display: block;
  min-width: 0px;
  width: 100%;
  opacity: 0.5;
  resize: none;
  transition: all ease-in 3s;

  &::placeholder {
    color: #fff;
    opacity: 0.8;
  }

  &:hover {
    &::placeholder {
      opacity: 1;
    }
  }
`

const TextField = ({ type = 'text', ...props }) => {
  const [hover, setHover] = useState(false)

  return (
    <Flex flexDirection='column' position='relative'>
      {type === 'text' ? (
        <StyledTextField
          type='text'
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          {...props}
        />
      ) : (
        <StyledTextAreaField
          rows='6'
          autocomplete='off'
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          {...props}
        />
      )}

      <Line color='rgb(255,255,255,25%)' play={true} />
      <Flex position='absolute' bottom={0} width='100%'>
        <Line color='rgb(255,255,255,35%)' height={2} play={hover} />
      </Flex>
    </Flex>
  )
}

export default TextField
