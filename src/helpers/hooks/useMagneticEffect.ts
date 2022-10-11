import { useEffect, useRef } from 'react'
import { useIsMobile } from '.'
import { distance } from '../math'

interface useMagneticEffectProps {
  containerRef: any
  contentRef?: any
}

const useMagneticEffect = ({
  containerRef: initialContainerRef,
  contentRef: initialContentRef,
}: useMagneticEffectProps) => {
  const containerRef = useRef()
  const contentRef = useRef()
  const isDesktop = !useIsMobile()

  const magneticEffect = ({ containerRef, contentRef, mouseX, mouseY }) => {
    let x = 0
    let y = 0
    // New values for the translations
    const rect = containerRef.getBoundingClientRect()
    const distanceToTrigger = rect.width * 0.6
    const distanceMouseButton = distance(
      mouseX + window.scrollX,
      mouseY + window.scrollY,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2
    )

    // Handle magnetic effect
    if (distanceMouseButton < distanceToTrigger) {
      // Translate button position on hover
      x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2
      y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2
      containerRef.style.transform = `translate3d(${x}px, ${y}px, 0)`
      contentRef &&
        (contentRef.style.transform = `translate3d(${x / 4}px, ${y / 4}px, 0)`)
    } else {
      // Restore initial position
      containerRef.style.transform = `translate3d(0, 0, 0)`
      contentRef && (contentRef.style.transform = `translate3d(0, 0, 0)`)
    }
  }

  useEffect(() => {
    const node: any = initialContainerRef?.current ?? containerRef.current
    const contentNode: any = initialContentRef?.current ?? contentRef.current

    const updateMousePosition = ({ clientX: mouseX, clientY: mouseY }) => {
      magneticEffect({
        containerRef: node,
        contentRef: contentNode,
        mouseX,
        mouseY,
      })
    }

    if (node && isDesktop) {
      // magnetic effect only in Desktop
      node.addEventListener('mousemove', updateMousePosition)

      return () => {
        node.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [
    containerRef,
    contentRef,
    initialContainerRef,
    initialContentRef,
    isDesktop,
  ])

  return { containerRef, contentRef }
}

export default useMagneticEffect
