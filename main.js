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


// line animation

var path = document.querySelector('#lineAnimationLine');
var length = path.getTotalLength();
// Clear any previous transition
path.style.transition = path.style.WebkitTransition = 'none';
// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();


window.addEventListener('scroll', () => {
  
  // What % down is it?
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);


  // Length to offset the dashes
  var drawLength = length * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = length - drawLength;

});

// parallax animation 



window.addEventListener('scroll', function(e) {

  const target = document.querySelectorAll('#scroll');

  console.log(target);

  var index = 0, length = target.length;
  for(index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if(target[index].dataset.direction === 'vertical'){
      target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
    
    } else if (target[index].dataset.direction === 'horizontal') {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      target[index].style.transform = 'translate3d('+pos+'px, 0px, 0px)';

    } else if (target[index].dataset.direction === 'opacity') {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      target[index].style.opacity = 'calc(1 - '+pos+')';
    
    
    } else {
      return
    }
  }

});




