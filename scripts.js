grabHeader = document.querySelector('.header');

headerLetters = grabHeader.innerText.split('');



ngBtn = document.querySelector('.ng-btn');

// ngBtn.addEventListener('')

hvrT = document.querySelector('.hvr-t');
rtnT = document.querySelector('.rtn-t');

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


moreInfoBtn = document.querySelector('.more-info-btn');

moreInfoBtn.addEventListener('click', function() {
  moreInfoBtn.classList.toggle('more-info-btn-clicked');
})