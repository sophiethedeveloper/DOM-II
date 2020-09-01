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