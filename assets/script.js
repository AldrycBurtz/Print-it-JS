const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imagePath = "assets/images/slideshow/"


let banner = document.querySelector("#banner");
let position = 0
let dotsElements = document.querySelector(".dots");

let displayDots = (index) => {
	dotsElements.innerHTML = ""
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement ("div")
	dot.setAttribute("class","dot")
	if (index == i) {
		dot.classList.add("dot_selected")
	}
	dotsElements.appendChild(dot)
}
}

// 	dotsElements.innerHTML = "" 	:		Revient à supprimer les dots au démarrage de la page

displayDots (position)

const image = document.createElement("img")
image.setAttribute("src",imagePath+slides[position].image)

image.setAttribute("class", "banner-img")

const tagLine = document.createElement("p")
tagLine.innerHTML = slides[position].tagLine



banner.appendChild(image)
banner.appendChild(tagLine)


let leftArrow = document.querySelector(".arrow_left");

leftArrow.addEventListener("click", () => {
	position --
	if (position < 0) {
		position = slides.length -1
	}
	image.setAttribute ("src",imagePath+slides[position].image)
	tagLine.innerHTML = slides[position].tagLine
	displayDots (position)
})

let rightArrow = document.querySelector(".arrow_right");

rightArrow.addEventListener("click", () => {
	position ++
	if (position >= slides.length) {
		position = 0
	}
	image.setAttribute ("src",imagePath+slides[position].image)
	tagLine.innerHTML = slides[position].tagLine
	displayDots (position)
})



// Déclarer n = slides



// Commencer par affiche l'élément 0 (notre premiere slide),
// lorsque l'on clic sur la fleche de droite
	// incrémanter l'index du tableau de slide
	// SI n >= nombre d'éléments tableau
		// dans ce cas n = 0
	// on affiche l'élément n


// Commencer par affiche l'élément 0 (notre premiere slide),
// lorsque l'on clic sur la fleche de gauche
	// incrémanter l'index du tableau de slide
	// SI n < 0
		// dans ce cas n = nombre d'éléments tableau -1
	// on affiche l'élément n


// SI n = 2 > dot 2 selected
