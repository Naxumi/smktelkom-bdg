var navbar = document.getElementById('navbar');
var navbarLogo = document.getElementById("navbar-logo");
var navbarText = document.getElementById("navbar-text");
// navbar-btn
// var navbarBtn1 = document.getElementById("navbar-btn-1");
// var navbarBtn2 = document.getElementById("navbar-btn-2");

var navbarBtn = document.querySelectorAll("button.navbar-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 131 || document.documentElement.scrollTop > 131) {
  	navbar.style.backgroundColor = "#fff";
  	navbar.classList.add("shadow");
  	navbarLogo.src = "smk telkom bandung.png";
  	navbarText.style.color = "black";
  	for (var i = 0; i < navbarBtn.length; i++) {
  		navbarBtn[i].style.setProperty("color", "red", "important");
  		navbarBtn[i].style.borderColor = "red";
  		navbarBtn[i].classList.remove("navbar-btn-hoverWhite");
  		navbarBtn[i].classList.add("navbar-btn-hoverRed");
  	}
  } else {
  	navbar.style.backgroundColor = "transparent";
  	navbar.classList.remove("shadow");
  	navbarLogo.src = "smk telkom bandung putih.png";
  	navbarText.style.color = "#fff";
  	for (var i = 0; i < navbarBtn.length; i++) {
  		navbarBtn[i].style.setProperty("color", "#fff", "important");
  		navbarBtn[i].style.borderColor = "#fff";
  		navbarBtn[i].classList.remove("navbar-btn-hoverRed");
  		navbarBtn[i].classList.add("navbar-btn-hoverWhite");
  	}
  }
}