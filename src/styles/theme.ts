const breakpoints: any = ['40em', '52em', '64em', '80em']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

// usage example
// bg={{ _: 'blue', sm: 'red', md: 'ref' }}

export const size = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
}

export const fonts = {
  h1: {
    desktop: '70px',
    mobile: '30px',
    family: 'Helvetica',
    fontWeight: 'normal',
  },
  h2: {
    desktop: '28px',
    mobile: '24px',
    family: 'Helvetica',
    fontWeight: 'normal',
  },
  h3: {
    desktop: '50px',
    mobile: '22px',
    family: 'LibreFranklin',
    fontWeight: 'lighter',
  },
  p: {
    desktop: '25px',
    mobile: '20px',
    family: 'LibreFranklin',
    fontWeight: 'lighter',
  },
  span: {
    mobile: '12px',
    family: 'LibreFranklin',
    fontWeight: 'lighter',
  },
}

export const device = {
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
}

export default {
  colors: {
    primary: 'rgb(247, 59, 0)',
    secondary: 'white',
    lightGrey: '#5050502b',
    orange: '#FF4B0E',
    // grey50: 'rgba(255, 255, 255, 0.05)',
    grey50: 'rgba(255, 255, 255, 0.005)',
    grey40: 'rgb(49 49 49 / 39%)',
  },
  fonts: {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
  },
  spacing: {
    horizontal: {
      desktop: '10%',
      mobile: '5%',
    },
    tiny: '0.5em',
    small: '1em',
    medium: '4em',
    large: '6em',
  },
  sizes: {
    desktop: {
      contentWidth: '1100px',
    },
  },
  transitions: {
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  },
  breakpoints,
}
