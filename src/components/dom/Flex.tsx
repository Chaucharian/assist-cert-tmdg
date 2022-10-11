import styled from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  flexbox,
  position,
  compose,
} from 'styled-system'

const Flex = styled.div`
  display: flex;
  ${compose(color, space, border, layout, flexbox, position)}
`
export default Flex
