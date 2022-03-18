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
const cont1 = document.querySelector('.division2-section2')
const cont2 = document.querySelector('.cont-div')
const div1_sect2 = document.querySelector('.division1-section2')


//eliminar background de los elementos
const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const div3 = document.querySelector('.div3')
const div4 = document.querySelector('.div4')
const div5 = document.querySelector('.div5')
const div6 = document.querySelector('.div6')
const div7 = document.querySelector('.div7')
const div8 = document.querySelector('.div8')
const div9 = document.querySelector('.div9')
const div10 = document.querySelector('.div10')
const div11 = document.querySelector('.div11')
const div12 = document.querySelector('.div12')
const div13 = document.querySelector('.div13')
const div14 = document.querySelector('.div14')
const div15 = document.querySelector('.div15')
const div16 = document.querySelector('.div16')
const div17 = document.querySelector('.div17')
const div18 = document.querySelector('.div18')
const div19 = document.querySelector('.div19')
const div20 = document.querySelector('.div20')
const div21 = document.querySelector('.div21')
const div22 = document.querySelector('.div22')


// elementos actual league

div1.addEventListener("click", () => {

  if(div2.classList.contains("division-background") || div3.classList.contains("division-background") || div4.classList.contains("division-background") || div5.classList.contains("division-background") || div6.classList.contains("division-background") || div7.classList.contains("division-background")) {

    div2.classList.remove("division-background"), div3.classList.remove("division-background"), div4.classList.remove("division-background"), div5.classList.remove("division-background"), div6.classList.remove("division-background"), div7.classList.remove("division-background")
  }
})

div2.addEventListener("click", () => {

  if(div1.classList.contains("division-background") || div3.classList.contains("division-background") || div4.classList.contains("division-background") || div5.classList.contains("division-background") || div6.classList.contains("division-background") || div7.classList.contains("division-background")) {

    div1.classList.remove("division-background"), div3.classList.remove("division-background"), div4.classList.remove("division-background"), div5.classList.remove("division-background"), div6.classList.remove("division-background"), div7.classList.remove("division-background")
  }
})

div3.addEventListener("click", () => {

  if(div2.classList.contains("division-background") || div1.classList.contains("division-background") || div4.classList.contains("division-background") || div5.classList.contains("division-background") || div6.classList.contains("division-background") || div7.classList.contains("division-background")) {

    div2.classList.remove("division-background"), div1.classList.remove("division-background"), div4.classList.remove("division-background"), div5.classList.remove("division-background"), div6.classList.remove("division-background"), div7.classList.remove("division-background")
  }
})

div4.addEventListener("click", () => {

  if(div2.classList.contains("division-background") || div3.classList.contains("division-background") || div1.classList.contains("division-background") || div5.classList.contains("division-background") || div6.classList.contains("division-background") || div7.classList.contains("division-background")) {

    div2.classList.remove("division-background"), div3.classList.remove("division-background"), div1.classList.remove("division-background"), div5.classList.remove("division-background"), div6.classList.remove("division-background"), div7.classList.remove("division-background")
  }
})

div5.addEventListener("click", () => {

  if(div2.classList.contains("division-background") || div3.classList.contains("division-background") || div4.classList.contains("division-background") || div1.classList.contains("division-background") || div6.classList.contains("division-background") || div7.classList.contains("division-background")) {

    div2.classList.remove("division-background"), div3.classList.remove("division-background"), div4.classList.remove("division-background"), div1.classList.remove("division-background"), div6.classList.remove("division-background"), div7.classList.remove("division-background")
  }
})

div6.addEventListener("click", () => {

  if(div2.classList.contains("division-background") || div3.classList.contains("division-background") || div4.classList.contains("division-background") || div5.classList.contains("division-background") || div1.classList.contains("division-background") || div7.classList.contains("division-background")) {

    div2.classList.remove("division-background"), div3.classList.remove("division-background"), div4.classList.remove("division-background"), div5.classList.remove("division-background"), div1.classList.remove("division-background"), div7.classList.remove("division-background")
  }
})

div7.addEventListener("click", () => {

  if(div2.classList.contains("division-background") || div3.classList.contains("division-background") || div4.classList.contains("division-background") || div5.classList.contains("division-background") || div6.classList.contains("division-background") || div1.classList.contains("division-background")) {

    div2.classList.remove("division-background"), div3.classList.remove("division-background"), div4.classList.remove("division-background"), div5.classList.remove("division-background"), div6.classList.remove("division-background"), div1.classList.remove("division-background")
  }
})


//elementos actual division

div8.addEventListener("click", () => {

  if(div9.classList.contains("division-background") || div10.classList.contains("division-background") || div11.classList.contains("division-background") ) {

    div9.classList.remove("division-background"), div10.classList.remove("division-background"), div11.classList.remove("division-background")
  }
})

div9.addEventListener("click", () => {

  if(div8.classList.contains("division-background") || div10.classList.contains("division-background") || div11.classList.contains("division-background") ) {

    div8.classList.remove("division-background"), div10.classList.remove("division-background"), div11.classList.remove("division-background")
  }
})

div10.addEventListener("click", () => {

  if(div9.classList.contains("division-background") || div8.classList.contains("division-background") || div11.classList.contains("division-background") ) {

    div9.classList.remove("division-background"), div8.classList.remove("division-background"), div11.classList.remove("division-background")
  }
})

div11.addEventListener("click", () => {

  if(div9.classList.contains("division-background") || div10.classList.contains("division-background") || div8.classList.contains("division-background") ) {

    div9.classList.remove("division-background"), div10.classList.remove("division-background"), div8.classList.remove("division-background")
  }
})


//elementos desired league
div12.addEventListener("click", () => {

  if(div13.classList.contains("division-background") || div14.classList.contains("division-background") || div15.classList.contains("division-background") || div16.classList.contains("division-background") || div17.classList.contains("division-background") || div18.classList.contains("division-background")) {

    div13.classList.remove("division-background"), div14.classList.remove("division-background"), div15.classList.remove("division-background"), div16.classList.remove("division-background"), div17.classList.remove("division-background"), div18.classList.remove("division-background")
  }
})

div13.addEventListener("click", () => {

  if(div12.classList.contains("division-background") || div14.classList.contains("division-background") || div15.classList.contains("division-background") || div16.classList.contains("division-background") || div17.classList.contains("division-background") || div18.classList.contains("division-background")) {

    div12.classList.remove("division-background"), div14.classList.remove("division-background"), div15.classList.remove("division-background"), div16.classList.remove("division-background"), div17.classList.remove("division-background"), div18.classList.remove("division-background")
  }
})

div14.addEventListener("click", () => {

  if(div13.classList.contains("division-background") || div12.classList.contains("division-background") || div15.classList.contains("division-background") || div16.classList.contains("division-background") || div17.classList.contains("division-background") || div18.classList.contains("division-background")) {

    div13.classList.remove("division-background"), div12.classList.remove("division-background"), div15.classList.remove("division-background"), div16.classList.remove("division-background"), div17.classList.remove("division-background"), div18.classList.remove("division-background")
  }
})

div15.addEventListener("click", () => {

  if(div13.classList.contains("division-background") || div14.classList.contains("division-background") || div12.classList.contains("division-background") || div16.classList.contains("division-background") || div17.classList.contains("division-background") || div18.classList.contains("division-background")) {

    div13.classList.remove("division-background"), div14.classList.remove("division-background"), div12.classList.remove("division-background"), div16.classList.remove("division-background"), div17.classList.remove("division-background"), div18.classList.remove("division-background")
  }
})

div16.addEventListener("click", () => {

  if(div13.classList.contains("division-background") || div14.classList.contains("division-background") || div15.classList.contains("division-background") || div12.classList.contains("division-background") || div17.classList.contains("division-background") || div18.classList.contains("division-background")) {

    div13.classList.remove("division-background"), div14.classList.remove("division-background"), div15.classList.remove("division-background"), div12.classList.remove("division-background"), div17.classList.remove("division-background"), div18.classList.remove("division-background")
  }
})

div17.addEventListener("click", () => {

  if(div13.classList.contains("division-background") || div14.classList.contains("division-background") || div15.classList.contains("division-background") || div16.classList.contains("division-background") || div12.classList.contains("division-background") || div18.classList.contains("division-background")) {

    div13.classList.remove("division-background"), div14.classList.remove("division-background"), div15.classList.remove("division-background"), div16.classList.remove("division-background"), div12.classList.remove("division-background"), div18.classList.remove("division-background")
  }
})

div18.addEventListener("click", () => {

  if(div13.classList.contains("division-background") || div14.classList.contains("division-background") || div15.classList.contains("division-background") || div16.classList.contains("division-background") || div17.classList.contains("division-background") || div12.classList.contains("division-background")) {

    div13.classList.remove("division-background"), div14.classList.remove("division-background"), div15.classList.remove("division-background"), div16.classList.remove("division-background"), div17.classList.remove("division-background"), div12.classList.remove("division-background")
  }
})

//elementos desired division

div19.addEventListener("click", () => {

  if(div20.classList.contains("division-background") || div21.classList.contains("division-background") || div22.classList.contains("division-background") ) {

    div20.classList.remove("division-background"), div21.classList.remove("division-background"), div22.classList.remove("division-background")
  }
})

div20.addEventListener("click", () => {

  if(div19.classList.contains("division-background") || div21.classList.contains("division-background") || div22.classList.contains("division-background") ) {

    div19.classList.remove("division-background"), div21.classList.remove("division-background"), div22.classList.remove("division-background")
  }
})

div21.addEventListener("click", () => {

  if(div20.classList.contains("division-background") || div19.classList.contains("division-background") || div22.classList.contains("division-background") ) {

    div20.classList.remove("division-background"), div19.classList.remove("division-background"), div22.classList.remove("division-background")
  }
})

div22.addEventListener("click", () => {

  if(div20.classList.contains("division-background") || div21.classList.contains("division-background") || div19.classList.contains("division-background") ) {

    div20.classList.remove("division-background"), div21.classList.remove("division-background"), div19.classList.remove("division-background")
  }
})



//agregar background de los elementos y el id toma el valor del value

for (let i = 0; i < division.length; i++) {
  division[i].addEventListener("click", (e) => {
    division[i].classList.toggle("division-background")
    img_select.src = e.path[0].currentSrc
    img_actual.src = e.path[0].currentSrc
    // console.log(e.path[1].attributes[0].value)
    img_actual.id = e.path[1].attributes[0].value
    console.log(img_actual)
  })
}

for (let i = 0; i < subdivision.length; i++) {
  subdivision[i].addEventListener("click", (e) => {
    subdivision[i].classList.toggle("division-background")
    division_actual.textContent = e.path[0].innerText
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


//devuelve las cotizaciones

confirm.addEventListener("click", () => {

  //si no se selecciona nada
  if (img_actual.id === "" || division_actual.id === "" || img_desired.id === "") {
    price.textContent = "Debe seleccionar TODOS los parametros"
  }


  //division de hierro
  // if (img_actual.id === "1" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "12" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
  //   price.textContent = "2"
  // }
  // if (img_actual.id === "1" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "13" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
  //   price.textContent = "2"
  // }
  // if (img_actual.id === "1" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "12" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
  //   price.textContent = "No cotizable"
  // }

  //hierro IV

  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "12" && division_desired.id === "21") {
    price.textContent = "2"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "12" && division_desired.id === "20") {
    price.textContent = "4"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "12" && division_desired.id === "19") {
    price.textContent = "6"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "13" && division_desired.id === "22") {
    price.textContent = "8"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "13" && division_desired.id === "21") {
    price.textContent = "11"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "13" && division_desired.id === "20") {
    price.textContent = "14"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "13" && division_desired.id === "19") {
    price.textContent = "17"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "22") {
    price.textContent = "20"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "21") {
    price.textContent = "24"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "28"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "32"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "37"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "41.50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "46"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "50.50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "57.50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "66.50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "75.50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "84.50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "98.50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "123.50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "148.50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "173,50"
  }
  if (img_actual.id === "1" && division_actual.id === "11" && img_desired.id === "18") {
    price.textContent = "273.50"
  }


  //hierro III
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "12" && division_desired.id === "20") {
    price.textContent = "2"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "12" && division_desired.id === "19") {
    price.textContent = "4"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "13" && division_desired.id === "22") {
    price.textContent = "6"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "13" && division_desired.id === "21") {
    price.textContent = "9"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "13" && division_desired.id === "20") {
    price.textContent = "12"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "13" && division_desired.id === "19") {
    price.textContent = "15"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "22") {
    price.textContent = "18"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "21") {
    price.textContent = "22"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "26"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "30"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "35"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "39.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "44"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "48.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "55.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "64.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "73.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "82.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "96.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "121.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "146.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "171.50"
  }
  if (img_actual.id === "1" && division_actual.id === "10" && img_desired.id === "18") {
    price.textContent = "271.50"
  }

  //hierro II
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "12" && division_desired.id === "19") {
    price.textContent = "2"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "13" && division_desired.id === "22") {
    price.textContent = "4"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "13" && division_desired.id === "21") {
    price.textContent = "7"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "13" && division_desired.id === "20") {
    price.textContent = "10"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "13" && division_desired.id === "19") {
    price.textContent = "13"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "14" && division_desired.id === "22") {
    price.textContent = "16"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "14" && division_desired.id === "21") {
    price.textContent = "20"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "24"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "28"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "33"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "37.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "42"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "46.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "53.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "62.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "71.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "80.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "94.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "119.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "144.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "169.50"
  }
  if (img_actual.id === "1" && division_actual.id === "9" && img_desired.id === "18") {
    price.textContent = "255.50"
  }

  //hierro I
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "13" && division_desired.id === "22") {
    price.textContent = "2"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "13" && division_desired.id === "21") {
    price.textContent = "5"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "13" && division_desired.id === "20") {
    price.textContent = "8"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "13" && division_desired.id === "19") {
    price.textContent = "11"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "14" && division_desired.id === "22") {
    price.textContent = "14"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "14" && division_desired.id === "21") {
    price.textContent = "18"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "22"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "26"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "31"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "35.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "40"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "44.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "51.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "60.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "69.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "78.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "92.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "117.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "142.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "167.50"
  }
  if (img_actual.id === "1" && division_actual.id === "8" && img_desired.id === "18") {
    price.textContent = "267.50"
  }

  //division de bronce
  // if (img_actual.id === "2" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "13" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
  //   price.textContent = "3"
  // }
  // if (img_actual.id === "2" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "14" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
  //   price.textContent = "3"
  // }
  // if (img_actual.id === "2" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "13" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
  //   price.textContent = "No cotizable"
  // }

  //bronce IV
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "13" && division_desired.id === "21") {
    price.textContent = "3"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "13" && division_desired.id === "20") {
    price.textContent = "6"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "13" && division_desired.id === "19") {
    price.textContent = "9"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "22") {
    price.textContent = "12"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "21") {
    price.textContent = "16"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "20"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "24"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "29"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "33.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "38"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "42.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "49.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "58.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "67.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "76.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "90.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "115.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "140.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "165.50"
  }
  if (img_actual.id === "2" && division_actual.id === "11" && img_desired.id === "18") {
    price.textContent = "265.50"
  }

  //bronce III
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "13" && division_desired.id === "20") {
    price.textContent = "3"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "13" && division_desired.id === "19") {
    price.textContent = "6"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "22") {
    price.textContent = "9"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "21") {
    price.textContent = "13"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "17"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "21"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "26"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "30.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "35"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "39.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "46.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "55.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "64.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "73.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "87.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "112.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "137.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "162.50"
  }
  if (img_actual.id === "2" && division_actual.id === "10" && img_desired.id === "18") {
    price.textContent = "262.50"
  }

  //bronce II
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "13" && division_desired.id === "19") {
    price.textContent = "3"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "14" && division_desired.id === "22") {
    price.textContent = "6"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "14" && division_desired.id === "21") {
    price.textContent = "10"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "14"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "18"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "23"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "27.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "32"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "36.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "43.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "52.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "61.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "70.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "84.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "109.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "134.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "159.50"
  }
  if (img_actual.id === "2" && division_actual.id === "9" && img_desired.id === "18") {
    price.textContent = "159.50"
  }

  //bronce I
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "14" && division_desired.id === "22") {
    price.textContent = "3"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "14" && division_desired.id === "21") {
    price.textContent = "7"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "11"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "15"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "20"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "24.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "29"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "33.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "40.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "49.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "58.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "67.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "81.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "106.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "131.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "156.50"
  }
  if (img_actual.id === "2" && division_actual.id === "8" && img_desired.id === "18") {
    price.textContent = "256.50"
  }



  //division de plata
  // if (img_actual.id === "3" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "14" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
  //   price.textContent = "4"
  // }
  // if (img_actual.id === "3" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "15" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
  //   price.textContent = "5"
  // }
  // if (img_actual.id === "3" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "14" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
  //   price.textContent = "No cotizable"
  // }

  //plata IV
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "21") {
    price.textContent = "4"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "8"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "12"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "17"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "21.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "26"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "30.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "37.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "46.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "55.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "64.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "78.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "103.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "128.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "153.50"
  }
  if (img_actual.id === "3" && division_actual.id === "11" && img_desired.id === "18") {
    price.textContent = "253.50"
  }

  //plata III
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "20") {
    price.textContent = "4"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "8"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "13"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "17.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "22"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "26.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "33.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "42.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "51.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "60.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "74.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "99.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "124.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "149.50"
  }
  if (img_actual.id === "3" && division_actual.id === "10" && img_desired.id === "18") {
    price.textContent = "249.50"
  }

  //plata II
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "14" && division_desired.id === "19") {
    price.textContent = "4"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "9"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "13.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "18"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "22.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "29.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "38.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "47.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "56.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "70.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "95.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "120.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "145.50"
  }
  if (img_actual.id === "3" && division_actual.id === "9" && img_desired.id === "18") {
    price.textContent = "245.50"
  }

  //plata I
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "22") {
    price.textContent = "5"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "9.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "14"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "18.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "25.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "34.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "43.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "52.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "66.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "91.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "116.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "141.50"
  }
  if (img_actual.id === "3" && division_actual.id === "8" && img_desired.id === "18") {
    price.textContent = "241.50"
  }


  //division de oro
  // if (img_actual.id === "4" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "15" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
  //   price.textContent = "4,50"
  // }
  // if (img_actual.id === "4" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "16" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
  //   price.textContent = "7"
  // }
  // if (img_actual.id === "4" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "15" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
  //   price.textContent = "No cotizable"
  // }

  //oro IV
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "21") {
    price.textContent = "4.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "9"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "13.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "20.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "29.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "38.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "47.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "61.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "86.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "111.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "136.50"
  }
  if (img_actual.id === "4" && division_actual.id === "11" && img_desired.id === "18") {
    price.textContent = "236.50"
  }

  //oro III
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "20") {
    price.textContent = "4.50"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "9"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "16"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "25"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "34"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "43"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "57"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "82"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "107"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "132"
  }
  if (img_actual.id === "4" && division_actual.id === "10" && img_desired.id === "18") {
    price.textContent = "232"
  }

  //oro II
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "15" && division_desired.id === "19") {
    price.textContent = "4.50"
  }
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "11.50"
  }
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "20.50"
  }
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "29.50"
  }
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "38.50"
  }
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "52.50"
  }
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "77.50"
  }
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "102.50"
  }
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "127.50"
  }
  if (img_actual.id === "4" && division_actual.id === "9" && img_desired.id === "18") {
    price.textContent = "227.50"
  }

  //oro I
  if (img_actual.id === "4" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "22") {
    price.textContent = "7"
  }
  if (img_actual.id === "4" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "16"
  }
  if (img_actual.id === "4" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "25"
  }
  if (img_actual.id === "4" && division_actual.id === "8" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "34"
  }
  if (img_actual.id === "4" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "48"
  }
  if (img_actual.id === "4" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "73"
  }
  if (img_actual.id === "4" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "98"
  }
  if (img_actual.id === "4" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "123"
  }
  if (img_actual.id === "4" && division_actual.id === "8" && img_desired.id === "18") {
    price.textContent = "223"
  }


  //division de platino
  // if (img_actual.id === "5" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "16" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21") ) {
  //   price.textContent = "9"
  // }
  // if (img_actual.id === "5" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "17" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
  //   price.textContent = "14"
  // }
  // if (img_actual.id === "5" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "16" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
  //   price.textContent = "No cotizable"
  // }

  //platino IV
  if (img_actual.id === "5" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "21") {
    price.textContent = "9"
  }
  if (img_actual.id === "5" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "18"
  }
  if (img_actual.id === "5" && division_actual.id === "11" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "27"
  }
  if (img_actual.id === "5" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "41"
  }
  if (img_actual.id === "5" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "66"
  }
  if (img_actual.id === "5" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "91"
  }
  if (img_actual.id === "5" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "116"
  }
  if (img_actual.id === "5" && division_actual.id === "11" && img_desired.id === "18") {
    price.textContent = "216"
  }

  //platino III
  if (img_actual.id === "5" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "20") {
    price.textContent = "9"
  }
  if (img_actual.id === "5" && division_actual.id === "10" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "18"
  }
  if (img_actual.id === "5" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "32"
  }
  if (img_actual.id === "5" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "57"
  }
  if (img_actual.id === "5" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "82"
  }
  if (img_actual.id === "5" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "107"
  }
  if (img_actual.id === "5" && division_actual.id === "10" && img_desired.id === "18") {
    price.textContent = "207"
  }

  //platino II
  if (img_actual.id === "5" && division_actual.id === "9" && img_desired.id === "16" && division_desired.id === "19") {
    price.textContent = "9"
  }
  if (img_actual.id === "5" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "23"
  }
  if (img_actual.id === "5" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "48"
  }
  if (img_actual.id === "5" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "73"
  }
  if (img_actual.id === "5" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "98"
  }
  if (img_actual.id === "5" && division_actual.id === "9" && img_desired.id === "18") {
    price.textContent = "198"
  }

  //platino I
  if (img_actual.id === "5" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "22") {
    price.textContent = "25"
  }
  if (img_actual.id === "5" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "50"
  }
  if (img_actual.id === "5" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "75"
  }
  if (img_actual.id === "5" && division_actual.id === "8" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "100"
  }
  if (img_actual.id === "5" && division_actual.id === "8" && img_desired.id === "18") {
    price.textContent = "200"
  }


  //division de diamante
  // if (img_actual.id === "6" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "17" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
  //   price.textContent = "25"
  // }
  // if (img_actual.id === "6" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "18" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
  //   price.textContent = "100"
  // }
  // if (img_actual.id === "6" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "17" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
  //   price.textContent = "No cotizable"
  // }

  //diamante IV
  if (img_actual.id === "6" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "21") {
    price.textContent = "25"
  }
  if (img_actual.id === "6" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "50"
  }
  if (img_actual.id === "6" && division_actual.id === "11" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "75"
  }
  if (img_actual.id === "6" && division_actual.id === "11" && img_desired.id === "18") {
    price.textContent = "175"
  }

  //diamante III
  if (img_actual.id === "6" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "20") {
    price.textContent = "25"
  }
  if (img_actual.id === "6" && division_actual.id === "10" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "50"
  }
  if (img_actual.id === "6" && division_actual.id === "10" && img_desired.id === "18") {
    price.textContent = "150"
  }

  //diamante II
  if (img_actual.id === "6" && division_actual.id === "9" && img_desired.id === "17" && division_desired.id === "19") {
    price.textContent = "25"
  }
  if (img_actual.id === "6" && division_actual.id === "9" && img_desired.id === "18") {
    price.textContent = "125"
  }

  //diamante I
  if (img_actual.id === "6" && division_actual.id === "8" && img_desired.id === "18") {
    price.textContent = "100"
  }


  //division master
  if (img_actual.id === "7" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "18" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
    price.textContent = "100"
  }

  // if (img_actual.id === "7" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "18" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
  //   price.textContent = "No cotizable"
  // }
})

// div18.addEventListener("click", () => {
//   l_IV = cont2.querySelector('.div22')
//   l_III = cont2.querySelector('.div21')
//   l_II = cont2.querySelector('.div20')
//   cont2.removeChild(l_IV)
//   cont2.removeChild(l_III)
//   cont2.removeChild(l_II)
//   console.log (cont2.children.length)
// })

// div7.addEventListener("click", () => {
//   l_IV = cont1.querySelector('.div11')
//   l_III = cont1.querySelector('.div10')
//   l_II = cont1.querySelector('.div9')
//   cont1.removeChild(l_IV)
//   cont1.removeChild(l_III)
//   cont1.removeChild(l_II)
//   console.log (cont1.children.length)
// })

// div1_sect2.addEventListener("click", () => {
//   li_IV = cont1.querySelector('.div11')
//   li_III = cont1.querySelector('.div10')
//   li_II = cont1.querySelector('.div9')
//   cont1.appendChild(li_IV)
//   cont1.appendChild(li_III)
//   cont1.appendChild(li_II)
// })