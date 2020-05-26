// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick(){
//   new Audio('sounds/tom-1.mp3').play();
// }



function playSound(keyPressed) {
  switch (keyPressed) {
    case 'w':
      new Audio('sounds/tom-1.mp3').play();
      break;
    case 'a':
      new Audio('sounds/tom-2.mp3').play();
      break;
    case 's':
      new Audio('sounds/tom-3.mp3').play();
      break;
    case 'd':
      new Audio('sounds/tom-4.mp3').play();
      break;
    case 'j':
      new Audio('sounds/snare.mp3').play();
      break;
    case 'k':
      new Audio('sounds/crash.mp3').play();
      break;
    case 'l':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    default:

  }

}
cnt = document.querySelectorAll(".drum").length;
for (var i = 0; i < cnt; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonPressed = this.innerHTML;
    playSound(buttonPressed);
    addAnimation(buttonPressed);
  });
}

// here we are using event as an arguement in the fn which is essentially can be aby var_name
// it is declared as
// function addEventListener(type,callback)
// {
//   -
//   -
//   var eventDetails={
//     type:
//     key:
//     duration:
//   }
//   callback(eventDetails); //this is sent back to called func
// }
document.addEventListener("keydown",function (event){
  playSound(event.key) ;
  addAnimation(event.key);
});

function addAnimation(keyPressed){
  var activeButton = document.querySelector("."+keyPressed);
  activeButton.classList.add('pressed');
  setTimeout(function (){
    activeButton.classList.remove('pressed');
  },100);
}
