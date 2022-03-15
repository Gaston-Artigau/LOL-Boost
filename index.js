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
const confirm = document.querySelector('.confirm')
const price = document.querySelector('.price')


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
    division_actual.id = e.path[0].attributes[0].value
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
    division_desired.id = e.path[0].attributes[0].value
  })
}

// const result = img_actual.id + img_desired.id
// console.log(result)


// img_actual.addEventListener("click", (e) => {
//   // console.log(e.target.attributes[3].nodeValue)
//   if ( e.target.attributes[3].nodeValue === "1") {
//     console.log("price: $5")
//   }
//   if ( e.target.attributes[3].nodeValue === "2") {
//     console.log("price: $7")
//   }
//   if ( e.target.attributes[3].nodeValue === "3") {
//     console.log("price: $9")
//   }
//   if ( e.target.attributes[3].nodeValue === "4") {
//     console.log("price: $11")
//   }
//   if ( e.target.attributes[3].nodeValue === "5") {
//     console.log("price: $13")
//   }
//   if ( e.target.attributes[3].nodeValue === "6") {
//     console.log("price: $15")
//   }
//   if ( e.target.attributes[3].nodeValue === "7") {
//     console.log("price: $17")
//   }
// })

// img_desired.addEventListener("click", (e) => {
//   // console.log(e)
//   if ( e.target.id === "12") {
//     console.log("price: $5")
//   }
//   if ( e.target.id === "13") {
//     console.log("price: $7")
//   }
//   if ( e.target.id === "14") {
//     console.log("price: $9")
//   }
//   if ( e.target.id === "15") {
//     console.log("price: $11")
//   }
//   if ( e.target.id === "16") {
//     console.log("price: $13")
//   }
//   if ( e.target.id === "17") {
//     console.log("price: $15")
//   }
//   if ( e.target.id === "18") {
//     console.log("price: $17")
//   }
// })

// //division hgfdjskaasjdhf

// division_actual.addEventListener("click", (e) => {
//   // console.log(e.path[0].attributes.id.nodeValue)
//   if ( e.path[0].attributes.id.nodeValue === "11") {
//     console.log("price: $5")
//   }
//   if ( e.path[0].attributes.id.nodeValue === "10") {
//     console.log("price: $7")
//   }
//   if ( e.path[0].attributes.id.nodeValue === "9") {
//     console.log("price: $9")
//   }
//   if ( e.path[0].attributes.id.nodeValue === "8") {
//     console.log("price: $11")
//   }
// })

// division_desired.addEventListener("click", (e) => {
//   // console.log(e.target.id)
//   if ( e.target.id === "22") {
//     console.log("price: $5")
//   }
//   if ( e.target.id === "21") {
//     console.log("price: $7")
//   }
//   if ( e.target.id === "20") {
//     console.log("price: $9")
//   }
//   if ( e.target.id === "19") {
//     console.log("price: $11")
//   }
// })


confirm.addEventListener("click", () => {
  console.log(img_actual.id)
  if (img_actual.id === "" && division_actual.id === "" && img_desired.id === "" && division_desired.id === "") {
    price.textContent = "Debe seleccionar TODOS los parametros"
  }

  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "12" && division_desired.id === "19") {
    price.textContent = "No cotizable"
  }

  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "12" && division_desired.id === "20") {
    price.textContent = "14"
  }
})