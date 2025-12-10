const container = document.querySelector('#container')
const CONTAINER_SIZE = 960
const DEFAULT_GRID_SIZE = 16

const generateGrid = (sideSize) => {
  for (let i = 0; i < sideSize * sideSize; i++) {
    const square = document.createElement('div')
    square.setAttribute('class', 'square')
    square.style.width = (CONTAINER_SIZE / sideSize) + "px"
    square.style.height = (CONTAINER_SIZE / sideSize) + "px"

    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'red'
    })

    container.appendChild(square)
  }
}

generateGrid(DEFAULT_GRID_SIZE)