import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  font-size: 16px;
  color: #000;
  font-family: LibreFranklin;
`

const TextSplitterScroll = ({ text, style }: any) => {
  return (
    <Container>
      {text.split('').map((letter, index) => (
        <span
          data-scroll
          data-scroll-delay={index / 10}
          data-scroll-speed='6'
          style={style}
        >
          {letter}
        </span>
      ))}
    </Container>
  )
}

export default TextSplitterScroll
