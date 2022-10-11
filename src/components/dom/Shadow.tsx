import styled from 'styled-components'

const Shadow = styled.div`
  ${({ blur = 3, zIndex = -2, height = '100%' }) => `
  width: 100%;
  height: ${height};
  position: absolute;
  backdrop-filter: blur(${blur}px);
  top: 0;
  left: 0;
  z-index: ${zIndex};
  background-image: linear-gradient(#00000000, #000000);
`}
`
export default Shadow
