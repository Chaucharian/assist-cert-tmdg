import { animated, useSpring, UseSpringProps } from '@react-spring/web'
import { FC, useEffect, useState } from 'react'

export interface AppearingEffectProps {
  show?: boolean
  effect?: 'left' | 'right' | 'top' | 'bottom'
  rotation?: number
  animationProps?: any
  blendMode?: string
  containerProps?: any
  children: any
}

const AppearingEffect: FC<AppearingEffectProps> = ({
  show = true,
  effect = 'left',
  rotation = 0,
  blendMode = 'normal',
  animationProps,
  containerProps,
  children,
}) => {
  const [overflow, setOverflow] = useState('hidden')
  const xEffect =
    effect === 'left' ? '-100%' : effect === 'right' ? '100%' : '0%'
  const yEffect =
    effect === 'top' ? '-100%' : effect === 'bottom' ? '100%' : '0%'

  const [animation, start] = useSpring(() => ({
    from: {
      transform: `translate(${xEffect},${yEffect} ) rotate(${rotation}deg)`,
    },
    onRest: () => setOverflow('visible'),
    ...animationProps,
  }))

  useEffect(() => {
    if (show) {
      start({
        transform: 'translate(0px, 0px)  rotate(0deg)',
        ...animationProps,
      })
    } else {
      start({
        transform: `translate(${xEffect},${yEffect} ) rotate(${rotation}deg)`,
        ...animationProps,
      })
    }
  }, [show, start])

  return (
    <animated.div
      style={{ color: 'white', overflow, mixBlendMode: blendMode }}
      {...containerProps}
    >
      <animated.div style={animation}>{children}</animated.div>
    </animated.div>
  )
}

export default AppearingEffect
