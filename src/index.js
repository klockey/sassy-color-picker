if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  let hueVal = 0
  let satVal = 50
  let lightVal = 50

  const hueSlider = document.querySelector('input[name=hue]')
  const satSlider = document.querySelector('input[name=sat]')
  const lightSlider = document.querySelector('input[name=light]')
  const number = document.querySelector('div.number')
  const swatch = document.querySelector('div.swatch')

  hueSlider.addEventListener('input', (event) => {
    hueVal = event.target.value
    updateColor()
  })
  satSlider.addEventListener('input', (event) => {
    satVal = event.target.value
    updateColor()
  })
  lightSlider.addEventListener('input', (event) => {
    lightVal = event.target.value
    updateColor()
  })
  const updateColor = () => {
    let color = `hsl(${hueVal}, ${satVal}%, ${lightVal}%)`
    number.textContent = color
    swatch.style.backgroundColor = color
  }
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}

// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }
//
// document.addEventListener('DOMContentLoaded', main)
//
// if (module.hot) {
//   module.hot.dispose(() => window.location.reload())
//   module.hot.accept(err => console.error(err))
// }
