import { useHover } from '@/helpers/hooks'
import create from 'zustand'

const useStore = create((set): any => {
  return {
    menuHover: false,
    router: null,
    dom: null,
    video: null,
    videoUrl: '/videos/liquid.mp4',
    domReady: false,
    scroll: null,
    scrollTo: () => {},
    changeCameraEffect: false,
    letter: 'h',
    navigationOpen: false,
  }
})

export default useStore
