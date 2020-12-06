const body = document.querySelector("body");
const lable = document.querySelector(".js-imgLable");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  switch(imgNumber){
    case 0:
      lable.innerText = 'Spring'
      break;
    case 1:
      lable.innerText = 'Summer'
      break;
    case 2:
      lable.innerText = 'Autumn'
      break;
    case 3:
      lable.innerText = 'Winter'
      break;
    default:
      console.error("Something wrong")
  }
  
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); 
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();