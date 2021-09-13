const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'black', 'gold']

body.style.backgroundColor = 'orange'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length+1)
body.style.backgroundColor = colors[colorIndex]
}