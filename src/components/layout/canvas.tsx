import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import { state } from '../canvas/Galery/utils'
import styled from 'styled-components'

const StyledCanvas = styled(Canvas)``

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control.current) {
      const domElement = dom.current
      const originalTouchAction = domElement.style['touch-action']
      domElement.style['touch-action'] = 'none'

      return () => {
        domElement.style['touch-action'] = originalTouchAction
      }
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} />
}

const LCanvas = ({ children, ...canvasProps }) => {
  const dom = useStore((state) => state.dom)

  return (
    <StyledCanvas
      {...canvasProps}
      style={{ position: 'fixed', top: 0, zIndex: -10 }}
    >
      {/* <LControl /> */}
      <Preload all />
      {children}
    </StyledCanvas>
  )
}

export default LCanvas
