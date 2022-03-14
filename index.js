// selector
var menu = document.querySelector('.hamburger');
var slider = document.querySelector('.eso')
var slider1 = document.querySelector('.eso1')
var slider2 = document.querySelector('.eso2')
var slider3 = document.querySelector('.eso3')


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


//slider3

function toggleClose(event) {
  this.classList.toggle('close')
  document.querySelector(".menuppal").classList.toggle("close")
  event.preventDefault();
}

slider3.addEventListener('click', toggleClose, false);



// function toggleAfterClose(event) {
//   this.classList.remove('close')
//   this.classList.remove('is-active')
//   document.querySelector(".menuppal").classList.remove("is-active")
//   document.querySelector(".menuppal").classList.remove("close")
//   event.preventDefault();
// }

// menu.addEventListener('click', toggleAfterClose, false);


//section5

const card = document.querySelectorAll('.cards-section5')
const description = document.querySelectorAll('.card-description')

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => description[i].classList.toggle("visibility-card"))
}


//price2
const division = document.querySelectorAll('.division')
const subdivision = document.querySelectorAll('.subdivision')
const division2 = document.querySelectorAll('.division2')
const subdivision2 = document.querySelectorAll('.subdivision2')
const img_select = document.querySelector('.img-select')
const img_select2 = document.querySelector('.img-select2')
const img_actual = document.querySelector('.img-actual')
const img_desired = document.querySelector('.img-desired')
const division_actual = document.querySelector('.division-actual')
const division_desired = document.querySelector('.division-desired')


const value_actual = ''
const value_desired = ''
for (let i = 0; i < division.length; i++) {
  division[i].addEventListener("click", (e) => {
    division[i].classList.toggle("division-background")
    img_select.src = e.path[0].currentSrc
    img_actual.src = e.path[0].currentSrc
    // console.log(e)
    // console.log(e.path[1].attributes[0].value)
    img_actual.id = e.path[1].attributes[0].value
    console.log(img_actual)
  })
}

for (let i = 0; i < subdivision.length; i++) {
  subdivision[i].addEventListener("click", (e) => {
    subdivision[i].classList.toggle("division-background")
    division_actual.textContent = e.path[0].innerText
    // console.log(e)
    // console.log(e.path[0].attributes[0].value)
    img_actual.id = e.path[0].attributes[0].value
    console.log(img_actual)
  })
}

//desired

for (let i = 0; i < division2.length; i++) {
  division2[i].addEventListener("click", (e) => {
    division2[i].classList.toggle("division-background")
    img_select2.src = e.path[0].currentSrc
    img_desired.src = e.path[0].currentSrc
    img_desired.id = e.path[1].attributes[0].value
    console.log(img_desired)
  })
}

for (let i = 0; i < subdivision2.length; i++) {
  subdivision2[i].addEventListener("click", (e) => {
    subdivision2[i].classList.toggle("division-background")
    division_desired.textContent = e.path[0].innerText
    img_desired.id = e.path[0].attributes[0].value
    console.log(img_desired)
  })
}

const result = img_actual.id + img_desired.id
console.log(result)