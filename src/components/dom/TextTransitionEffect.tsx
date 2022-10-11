import { animated, useSpring, UseSpringProps } from '@react-spring/web'
import { FC, useEffect, useState } from 'react'

export interface AppearingEffectProps {
  show?: boolean
  effect?: 'left' | 'right' | 'top' | 'bottom'
  rotation?: number
  animationProps?: any
  blendMode?: string
  texts: any
  height?: number
  position?: number
  transitionDelay?: number
  onChange?: (index: number) => any
}

const TextTransitionEffect: FC<AppearingEffectProps> = ({
  show = true,
  effect = 'left',
  rotation = 0,
  blendMode = 'normal',
  animationProps,
  height = 200,
  position = null,
  transitionDelay = 4000,
  texts,
  onChange = () => {},
  ...props
}) => {
  const xEffect =
    effect === 'left' ? '-100%' : effect === 'right' ? '100%' : '0%'
  const yEffect =
    effect === 'top' ? '-100%' : effect === 'bottom' ? '100%' : '0%'
  const [internalPosition, setInternalPosition] = useState(0)

  const [animation, start] = useSpring(() => ({
    from: {
      transform: `translate(${xEffect},-${
        texts.length * height
      }px ) rotate(${rotation}deg)`,
    },
    ...animationProps,
  }))

  useEffect(() => {
    if (typeof position === 'number') {
      const newPosition =
        position === null
          ? texts.length * height
          : position === 0
          ? 0
          : -(position * height)

      start({
        transform: `translate(0px, ${newPosition}px)  rotate(0deg)`,
        ...animationProps,
      })
    } else {
      // auto mode
      const newIndex =
        internalPosition >= texts.length - 1
          ? 0
          : internalPosition === -1
          ? texts.length - 1
          : internalPosition + 1

      const timeoutId = setInterval(
        () => setInternalPosition(newIndex),
        transitionDelay
      )
      return () => clearInterval(timeoutId)
    }
  }, [position, internalPosition])

  useEffect(() => {
    // animate auto mode
    const newPosition =
      internalPosition === null
        ? texts.length * height
        : internalPosition === 0
        ? 0
        : -(internalPosition * height)

    start({
      transform: `translate(0px, ${newPosition}px)  rotate(0deg)`,
      ...animationProps,
    })
    onChange(internalPosition)
  }, [internalPosition])

  return (
    <animated.div
      style={{
        color: 'white',
        overflow: 'hidden',
        mixBlendMode: blendMode,
        position: 'relative',
        height: `${height}px`,
        width: '100%',
      }}
      {...props}
    >
      <animated.div style={{ ...animation, position: 'absolute' }}>
        {texts.map((text, index) => (
          <animated.div style={{ height: `${height}px` }}>{text}</animated.div>
        ))}
      </animated.div>
    </animated.div>
  )
}

export default TextTransitionEffect
