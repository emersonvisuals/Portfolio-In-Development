// Typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Designer.", "Developer.", "Creator."];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    //remove 
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


// mobile toggle
const trigger = document.querySelector('.mobileTrigger');
const toggle = document.querySelector('.mobileToggle');

trigger.addEventListener('click', function(){
  toggle.classList.toggle('active');
});


// desktop portfolio nav toggle
const portfolioTrigger = document.querySelector('.navPortfolio');
const portfolioToggle = document.querySelector('.portfolioToggle');

portfolioTrigger.addEventListener('click', function(){
  portfolioToggle.classList.toggle('active');
  portfolioTrigger.classList.toggle('active');

});


window.onclick = function(event) {
  if (event.target !== portfolioTrigger) {
    portfolioToggle.classList.remove('active');
    portfolioTrigger.classList.remove('active');
  }
}


// parallax background icon animation
const backgroundImage = document.querySelector('.background');

console.log(backgroundImage);

window.addEventListener('scroll', function(e) {

  const target = document.querySelector('#scroll');

  let scrolled = window.pageYOffset;
  let rate = scrolled * 0.1;

  target.style.transform = 'translateX('+rate+'px)'
});


// portfolio below icon animation
/*
window.addEventListener('scroll', function(e){

  const portfolioBelow = document.querySelector('.scrollDown');

  let scrolledTwo = window.pageYOffset;
  let rateTwo = scrolledTwo * 0.01;
  let rateThree = scrolledTwo * 0.005;

  console.log(rateTwo);


  portfolioBelow.style.opacity = ''+rateTwo+''
  portfolioBelow.style.transform = 'scale('+rateThree+', '+rateThree+')'

});
*/