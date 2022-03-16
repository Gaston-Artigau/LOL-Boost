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
  if (img_actual.id === "" || division_actual.id === "" || img_desired.id === "" || division_desired.id === "") {
    price.textContent = "Debe seleccionar TODOS los parametros"
  }


  //division de hierro
  if (img_actual.id === "1" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "12" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
    price.textContent = "2"
  }
  if (img_actual.id === "1" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "13" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
    price.textContent = "2"
  }
  if (img_actual.id === "1" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "12" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
    price.textContent = "No cotizable"
  }


  //division de bronce
  if (img_actual.id === "2" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "13" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
    price.textContent = "3"
  }
  if (img_actual.id === "2" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "14" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
    price.textContent = "3"
  }
  if (img_actual.id === "2" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "13" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
    price.textContent = "No cotizable"
  }


  //division de plata
  if (img_actual.id === "3" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "14" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
    price.textContent = "4"
  }
  if (img_actual.id === "3" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "15" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
    price.textContent = "5"
  }
  if (img_actual.id === "3" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "14" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
    price.textContent = "No cotizable"
  }


  //division de oro
  if (img_actual.id === "4" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "15" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
    price.textContent = "4,50"
  }
  if (img_actual.id === "4" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "16" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
    price.textContent = "7"
  }
  if (img_actual.id === "4" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "15" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
    price.textContent = "No cotizable"
  }


  //division de platino
  if (img_actual.id === "5" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "16" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21") ) {
    price.textContent = "9"
  }
  if (img_actual.id === "5" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "17" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
    price.textContent = "14"
  }
  if (img_actual.id === "5" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "16" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
    price.textContent = "No cotizable"
  }


  //division de diamante
  if (img_actual.id === "6" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "17" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
    price.textContent = "25"
  }
  if (img_actual.id === "6" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "18" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22")) {
    price.textContent = "100"
  }
  if (img_actual.id === "6" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "17" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
    price.textContent = "No cotizable"
  }


  //division master
  if (img_actual.id === "7" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9") && img_desired.id === "18" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21")) {
    price.textContent = "100"
  }
  if (img_actual.id === "7" && (division_actual.id === "11" || division_actual.id === "10" || division_actual.id === "9" || division_actual.id === "8") && img_desired.id === "18" && (division_desired.id === "19" || division_desired.id === "20" || division_desired.id === "21" || division_desired.id === "22") && division_desired.id == (Number(division_actual.id)+11).toString() || division_desired.id == (Number(division_actual.id)+12).toString() || division_desired.id == (Number(division_actual.id)+13).toString() || division_desired.id == (Number(division_actual.id)+14).toString() ) {
    price.textContent = "No cotizable"
  }
})