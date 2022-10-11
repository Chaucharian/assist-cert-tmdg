import styled from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  flexbox,
  position,
  compose,
  grid,
} from 'styled-system'

const Grid = styled.div`
  display: grid;
  ${compose(color, space, border, layout, flexbox, grid, position)}
`
export default Grid
