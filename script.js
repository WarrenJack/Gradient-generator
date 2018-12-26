var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var gen = document.getElementById("gen");

css.textContent = "linear-gradient(to right, " + color1.value + " " 
+ color2.value + ") ;";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

/* function random() {
	var resr = Math.floor(Math.random() * 256);
	return resr;
} */

const random = () => Math.floor(Math.random() * 256);

function randomBg() {
	body.style.background = "linear-gradient(to right, rgb(" + random() + ", " + random() + ", " + random() + "), rgb(" + random() + ", " + random() + ", " + random() + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
 
gen.addEventListener("click", randomBg);