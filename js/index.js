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

// 5 -Focus
const focusListener = document.querySelector('input[type=text]');

focusListener.addEventListener('focus', (event) => {
  event.target.style.background = '#90ee90';
})

// 6 -Click
const boatImage = document.querySelector('.inverse-content img');

boatImage.addEventListener('click', (event) => {
  event.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
})

// 7- Submit
function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById('contact');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);

  //8 -Select
function logSelection(event) {
    const customerName = document.getElementById('customerName');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    customerName.textContent = `Thank you for choosing us, ${selection}!`;
  }
  
  const customerInput = document.querySelector('input');
  customerInput.addEventListener('select', logSelection);

  //9 -wheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.lastBoat');
  el.onwheel = zoom;
  