import { useRef, useState, useEffect } from 'react'

function useHover({
  ref: initialRef,
  onMouseOver = (event) => {},
  onMouseOut = (event) => {},
}) {
  const ref = useRef()

  useEffect(() => {
    const node = initialRef.current ?? ref.current

    if (node) {
      node.addEventListener('mouseover', onMouseOver)
      node.addEventListener('mouseout', onMouseOut)

      return () => {
        node.removeEventListener('mouseover', onMouseOver)
        node.removeEventListener('mouseout', onMouseOut)
      }
    }
  }, [ref, initialRef])

  return ref
}

export default useHover
