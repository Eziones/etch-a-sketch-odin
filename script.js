const container = document.querySelector('#container')
const CONTAINER_SIZE = 960
const DEFAULT_GRID_SIZE = 16

const clearGrid = () => {
  console.log(Array.from(container.children))
  Array.from(container.children).forEach(child => {
    container.removeChild(child)
  });
}

const generateGrid = (sideSize) => {
  for (let i = 0; i < sideSize * sideSize; i++) {
    const square = document.createElement('div')
    square.setAttribute('class', 'square')
    square.style.width = (CONTAINER_SIZE / sideSize) + "px"
    square.style.height = (CONTAINER_SIZE / sideSize) + "px"
    square.style.flexGrow = 1;
    square.style.flexShrink = 1;
    square.style.flexBasis = 100/sideSize + '%'

    console.log(100/sideSize)

    square.addEventListener('mouseover', () => {
      if(!square.style.backgroundColor) {
        const red = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)
        square.style.opacity = .2
        square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
      } else {
        if(Number.parseFloat(square.style.opacity) < 1) {
          square.style.opacity = Number.parseFloat(square.style.opacity) + .2
        }
      }
    })

    container.appendChild(square)
  }
}

const sizeButton = document.querySelector('.size-button')
sizeButton.addEventListener('click', () => {
  let newSize = Number.parseInt(prompt("Enter a new grid size (1-100)"))
  while (newSize < 1 || newSize > 100) {
    newSize = Number.parseInt(prompt("Enter a new grid size (1-100)"))
  }
  clearGrid()
  generateGrid(newSize)
})

generateGrid(DEFAULT_GRID_SIZE)