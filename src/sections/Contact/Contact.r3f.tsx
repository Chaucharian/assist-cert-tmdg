import Text from '@/components/canvas/Text'
import { ReflectionGround } from '@/components/canvas/ReflectionGround'
import React from 'react'

const ContactScene = () => {
  return (
    <>
      <Text position={[-3, 0, 12]} font='/fonts/AkiraSuperBold.otf'>
        Contact
      </Text>
      <ReflectionGround
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[-3, -0.8, 12]}
      />
    </>
  )
}
export default ContactScene
