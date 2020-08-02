var buttonArea = document.getElementsByClassName("arrow-button-area");
var mainMenu = document.getElementsByClassName("main-menu");

for (var i = 0; i < mainMenu.length; i++) {
  mainMenu[i].addEventListener('mouseenter', function(e) {
    console.log(e.target);
    buttonArea[0].style.visibility = "visible";
  })

  mainMenu[i].addEventListener('mouseout', function(e) {
    console.log("나가요");
    buttonArea[0].style.visibility = "hidden";
  })
}


if (buttonArea) {
  buttonArea[0].style.visibility = "hidden";
}