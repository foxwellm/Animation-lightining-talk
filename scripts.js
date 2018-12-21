const grabHeader = document.querySelector('.header');
const headerLetters = grabHeader.innerText.split('');

//button transition
const ngBtn = document.querySelector('.ng-btn');
const hvrT = document.querySelector('.hvr-t');
const rtnT = document.querySelector('.rtn-t');
const ex1 = document.querySelector('.exam-1-container');
const ex2 = document.querySelector('.exam-2-container');

hvrT.addEventListener('click', function() {
  if(event.target.checked) {
    ngBtn.classList.add('ng-btn1');
    ex1.classList.add('bring-example');
  } else {
    ngBtn.classList.remove('ng-btn1');
    ex1.classList.remove('bring-example');
  }
})

rtnT.addEventListener('click', function () {
  if (event.target.checked) {
    ngBtn.classList.add('ng-btn2');
    ex2.classList.add('bring-example');
  } else {
    ngBtn.classList.remove('ng-btn2');
    ex2.classList.remove('bring-example');
  }
})

//expand box transition
const moreInfoBtn = document.querySelector('.more-info-btn');
const moreInfo = document.querySelector('.more-info');
const moreInfoTransition = document.querySelector('.mi-t');
const exMI = document.querySelector('.exam-mi-container');

moreInfoBtn.addEventListener('click', function () {
  moreInfoBtn.classList.toggle('more-info-btn-clicked');
  moreInfo.classList.toggle('more-info-expand');
  
})

moreInfoTransition.addEventListener('click', function () {
    moreInfo.classList.toggle('more-info-transition');
    exMI.classList.toggle('bring-example');
})

//expand box animation
const audioSurprise = document.getElementsByTagName("audio")[0];
const audioEagle = document.getElementsByTagName("audio")[1];
const moreInfoBtn2 = document.querySelector('.more-info-btn2');
const moreInfo2 = document.querySelector('.more-info2');
const supriseImg = document.querySelector('.suprise-img');
const bgImg2 = document.querySelector('.bg-img2');
const eagle = document.querySelector('.eagle');
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const moreInfoAnimation = document.querySelector('.mi-a');
const exMIA = document.querySelector('.exam-mia-container');

moreInfoAnimation.addEventListener('click', function () {
  // moreInfo.classList.toggle('more-info-transition');
  exMIA.classList.toggle('bring-example');
})

moreInfoBtn2.addEventListener('click', function () {
  moreInfoBtn2.classList.toggle('more-info-btn-clicked');
  moreInfo2.classList.toggle('more-info-animation');
  supriseImg.classList.toggle('suprise-animation');
  bgImg2.classList.toggle('bg-animation');
  eagle.classList.toggle('eagle-anim');
 
  setInterval(() => {
    audio2.play();
    setInterval(() => {
      audio2.pause();
      audio2.currentTime = 0;
    }, 2000);
  }, 4000);
  setInterval(() => {
    audio1.play();
    setInterval(() => {
      audio1.pause();
    }, 3000);
  }, 2000);
})


const stop = document.querySelector('.stop');
const an = document.querySelectorAll('.an');

stop.addEventListener('click', function() {
  an.forEach(elem => {
    elem.classList.remove('a1');
    elem.classList.remove('a2');
    elem.classList.remove('a3');
    elem.classList.remove('a4');
    elem.classList.remove('a5');
    elem.classList.add('an-stopped');
  })
})