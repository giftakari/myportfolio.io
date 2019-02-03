// When the user scrolls the page, execute myFunction 
window.onscroll = () => {myFunction()};

// Get the header
let header = document.querySelector(".header");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Animated Icon1

function openfolder() {
  var firstIcon;
  firstIcon = document.getElementById("div1");
  firstIcon.innerHTML = "&#xf114;";
  setTimeout(function () {
      firstIcon.innerHTML = "&#xf115;";
    }, 1000);
}
openfolder();
setInterval(openfolder, 2000);

//Animated Icon2

function chargebattery() {
  let secondIcon;
  secondIcon = document.getElementById("div2");
  secondIcon.innerHTML = "&#xf244;";
  setTimeout(function () {
      secondIcon.innerHTML = "&#xf243;";
    }, 1000);
  setTimeout(function () {
      secondIcon.innerHTML = "&#xf242;";
    }, 2000);
  setTimeout(function () {
      secondIcon.innerHTML = "&#xf241;";
    }, 3000);
  setTimeout(function () {
      secondIcon.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);
