const grabHeader = document.querySelector('.header');
const headerLetters = grabHeader.innerText.split('');

//button transition
const ngBtn = document.querySelector('.ng-btn');
const hvrT = document.querySelector('.hvr-t');
const rtnT = document.querySelector('.rtn-t');

hvrT.addEventListener('click', function() {
  if(event.target.checked) {
    ngBtn.classList.add('ng-btn1');
  } else {
    ngBtn.classList.remove('ng-btn1');
  }
})

rtnT.addEventListener('click', function () {
  if (event.target.checked) {
    ngBtn.classList.add('ng-btn2');
  } else {
    ngBtn.classList.remove('ng-btn2');
  }
})

//expand box transition
const moreInfoBtn = document.querySelector('.more-info-btn');
const moreInfo = document.querySelector('.more-info');
const moreInfoTransition = document.querySelector('.mi-t');

moreInfoBtn.addEventListener('click', function () {
  moreInfoBtn.classList.toggle('more-info-btn-clicked');
  moreInfo.classList.toggle('more-info-expand');

})

moreInfoTransition.addEventListener('click', function () {
    moreInfo.classList.toggle('more-info-transition');
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


//suprise animation