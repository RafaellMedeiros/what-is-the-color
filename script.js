window.addEventListener("load", start);

var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

var redOutput = document.querySelector("#redOutput");
var greenOutput = document.querySelector("#greenOutput");
var blueOutput = document.querySelector("#blueOutput");

var redNumber = red.value;
var greenNumber = green.value;
var blueNumber = blue.value;

var factor = document.querySelector(".multFactor")

function start() {

  function multFactor(event) {
    const inputFactor = event.target.value
    // console.log(inputFactor)
  }
  red.addEventListener("input", changeColor);
  green.addEventListener("input", changeColor);
  blue.addEventListener("input", changeColor);

  redOutput.value = redNumber;
  greenOutput.value = greenNumber;
  blueOutput.value = blueNumber;

  function changeColor() {
    var redNumber = red.value;
    var greenNumber = green.value;
    var blueNumber = blue.value;
    let rgb = []

    redOutput.value = redNumber;
    greenOutput.value = greenNumber;
    blueOutput.value = blueNumber;

    var newColor3 =
      "rgb(" + redNumber + "," + greenNumber + "," + blueNumber + ")";
    var color3 = document.querySelector("#color3");
    color3.style.background = newColor3;

    if (factor.value) {
      calcColor();
    }
  }
}


var multFactor = document.querySelector(".multFactor")
multFactor.addEventListener("input", calcColor)

function calcColor() {
  var redNumber = red.value;
  var greenNumber = green.value;
  var blueNumber = blue.value;


  var newColor1 =
    "rgb(" + redNumber * factor.value / (4 * Math.PI) + "," + greenNumber * factor.value / (4 * Math.PI) + "," + blueNumber * factor.value / (4 * Math.PI) + ")";
  var color1 = document.querySelector("#color1");
  color1.style.background = newColor1;
  var newColor2 =
    "rgb(" + redNumber * factor.value / (2 * Math.PI) + "," + greenNumber * factor.value / (2 * Math.PI) + "," + blueNumber * factor.value / (2 * Math.PI) + ")";
  var color2 = document.querySelector("#color2");
  color2.style.background = newColor2;
  var newColor4 =
    "rgb(" + redNumber * factor.value / (Math.PI) + "," + greenNumber * factor.value / (Math.PI) + "," + blueNumber * factor.value / (Math.PI) + ")";
  var color4 = document.querySelector("#color4");
  color4.style.background = newColor4;
  var newColor5 =
    "rgb(" + redNumber * 1 / 2 + "," + greenNumber * 1 / 2 + "," + blueNumber * 1 / 2 + ")";
  var color5 = document.querySelector("#color5");
  color5.style.background = newColor5;
}
