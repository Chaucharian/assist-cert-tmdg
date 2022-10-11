import { useEffect, useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

interface UseScrollOptions {
  ref?: any
  onScroll?: (progress: number) => any
}

const useScroll = (
  params?: UseScrollOptions
): { progress: any; locomotiveScroll: any } => {
  const { ref, onScroll = () => {} } = params ?? {}
  const { scroll: locomotiveScroll } = useLocomotiveScroll()
  const [progress, setScroll] = useState(0)

  const scrollHandler = (progress) => {
    onScroll(progress)
    setScroll(progress)
  }

  useEffect(() => {
    if (ref) {
      ref?.addEventListener('scroll', ({ currentTarget }) => {
        const winScroll = currentTarget?.scrollTop
        const height = currentTarget?.scrollHeight - currentTarget?.clientHeight

        scrollHandler((winScroll * 100) / height)
      })
    } else if (locomotiveScroll) {
      locomotiveScroll?.on('scroll', ({ limit, scroll }) => {
        const progress = (scroll.y / limit.y) * 100
        scrollHandler(progress)
      })
    } else {
      document.addEventListener(
        'scroll',
        ({ target: { documentElement } }: any) => {
          const winScroll = documentElement?.scrollTop
          const height =
            documentElement?.scrollHeight - documentElement?.clientHeight
          scrollHandler((winScroll * 100) / height)
        }
      )
    }
  }, [ref, locomotiveScroll])

  return { progress, locomotiveScroll }
}

export default useScroll
