export const styledConsoleMessage = (message, styles?) => {
  const stylesArray = [
    `background-image: linear-gradient(#00000000,#000000)`,
    'background-size: cover',
    'color: #fff',
    'padding: 10px 20px',
    'line-height: 35px',
    'width : 70px',
    'height : 70px',
    'border : .5px solid white',
  ].join(';')
  console.log(`%c ${message}`, styles ?? stylesArray)
}
