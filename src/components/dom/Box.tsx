import styled from 'styled-components'
import { space, layout, color, border, position, compose } from 'styled-system'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
  display: block;
  ${compose(color, space, border, layout, position)}
`
export default Box
