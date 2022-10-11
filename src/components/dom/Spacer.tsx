import styled from 'styled-components'

const Spacer = styled.div`
  ${({ vertical, horizontal }) => `
width: ${horizontal};
height: ${vertical};
`}
`

export default Spacer
