// Your code goes here
// 1 -mouseenter 
const funBus = document.querySelector('.intro img');

funBus.addEventListener('mouseenter', (e) => {
    funBus.style.transform = "scale(1.2)"
    funBus.style.transition = "all 0.3s"
  })

// 2 -mouseleave
funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = "scale(1)";
  })

// 3 -double click
let adventureImg = document.querySelector('.img-content img')

adventureImg.addEventListener('dblclick', (event) => {
    event.target.src = "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
})

//4 -Keydown
const keyListener = document.querySelector("#subject");

keyListener.addEventListener('keydown', (e) => {
  keyListener.textContent += `${e.code}`
})