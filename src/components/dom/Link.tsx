import { Flex, Line } from '.'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.a`
  position: relative;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
`

const Link = ({
  show,
  color1 = 'white',
  color2 = 'black',
  onClick = () => {},
  children,
  ...props
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div>
      <Container
        onClick={onClick}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      >
        {typeof children === 'function' ? children({ hover }) : children}
        <Line color={color1} play={show} />
        <Flex position='absolute' bottom={0} width='100%'>
          <Line color={color2} height={2} play={hover} />
        </Flex>
      </Container>
    </div>
  )
}

export default Link
