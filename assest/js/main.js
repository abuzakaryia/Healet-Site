// ---------------------------------------- open menu ----------------------------------------
var Menu = document.querySelector(".row");
var OpenMenu = document.querySelector(".btn-menu");
var CloseMenu = document.querySelector(".close-menu-btn");

OpenMenu.onclick = function () {
  Menu.classList.add("row-open");
}

window.addEventListener("focusout", function (event) {
  if (!Menu.contains(event.relatedTarget)) {
    Menu.classList.remove("row-open");
  }
});

CloseMenu.onclick = function () {
  Menu.classList.remove("row-open");
}

// ------------------------------------- logo hidden ----------------------------------------------

window.addEventListener('scroll', function() {
    var heading = document.querySelector('.logo');
    
    if (window.pageYOffset > 30) {
      heading.classList.add('hidden-btn');
    } else {
      heading.classList.remove('hidden-btn');
    }
  });

// ------------------------------------- slider ----------------------------------------------

let parent = document.getElementById("slider_list");

function moveLeft(){
  let firstChild = document.querySelector(".sliders ul li:first-child");
  parent.append(firstChild);
}

function moveRight(){
  let lastChild = document.querySelector(".sliders ul li:last-child");
  parent.prepend(lastChild);
} 



