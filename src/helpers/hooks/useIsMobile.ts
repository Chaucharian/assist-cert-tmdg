import { useWindowSize } from 'usehooks-ts'

const useIsMobile = () => {
  const { width } = useWindowSize()
  const isMobile = width < 834
  return isMobile
}

export default useIsMobile
