// selector
var menu = document.querySelector('.hamburger');
var slider = document.querySelector('.eso')
var slider1 = document.querySelector('.eso1')
var slider2 = document.querySelector('.eso2')

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);


function toggleClose(event) {
  this.classList.toggle('close')
  document.querySelector(".menuppal").classList.toggle("close")
  event.preventDefault();
}

slider.addEventListener('click', toggleClose, false);



function toggleAfterClose(event) {
  this.classList.remove('close')
  document.querySelector(".menuppal").classList.remove("close")
  event.preventDefault();
}

menu.addEventListener('click', toggleAfterClose, false);


// slider1

function toggleClose(event) {
  this.classList.toggle('close')
  document.querySelector(".menuppal").classList.toggle("close")
  event.preventDefault();
}

slider1.addEventListener('click', toggleClose, false);


//slider2

function toggleClose(event) {
  this.classList.toggle('close')
  document.querySelector(".menuppal").classList.toggle("close")
  event.preventDefault();
}

slider2.addEventListener('click', toggleClose, false);



// function toggleAfterClose(event) {
//   this.classList.remove('close')
//   this.classList.remove('is-active')
//   document.querySelector(".menuppal").classList.remove("is-active")
//   document.querySelector(".menuppal").classList.remove("close")
//   event.preventDefault();
// }

// menu.addEventListener('click', toggleAfterClose, false);



// precio

const price = document.getElementById('price')
const select_actual = document.getElementById('select-actual')
const select_desired = document.getElementById('select-desired')


const fragment = document.createDocumentFragment()
const p = document.createElement("P")

const value_actual = parseInt(select_actual.options[select_actual.selectedIndex].value)

const value_desired = parseInt(select_desired.options[select_desired.selectedIndex].value)

const value_actual_add = parseInt(select_actual.options[select_actual.selectedIndex].value) +1

console.log(value_actual)
console.log(value_actual_add)
console.log(value_desired == value_actual_add)

result = 10
// if (value_actual == 1 && value_desired == value_actual_add) {
//   p.textContent = `$${result}`
//   fragment.appendChild(p)
//   console.log(p)
//   price.appendChild(fragment)
// }

select_actual.options[select_actual.selectedIndex].addEventListener("click", () => {
  if (value_actual == 1 && value_desired == value_actual_add) {
    p.textContent = `$${result}`
    fragment.appendChild(p)
    console.log(p)
    price.appendChild(fragment)
  }
})

select_desired.options[select_desired.selectedIndex].addEventListener('click', () => {
  load()
  if (value_actual == 1 && value_desired == value_actual_add) {
    p.textContent = `$${result}`
    fragment.appendChild(p)
    console.log(p)
    price.appendChild(fragment)
  }
})


//section5

const card = document.querySelectorAll('.cards-section5')
console.log(card)
const description = document.querySelectorAll('.card-description')

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => description[i].classList.toggle("visibility-card"))
}