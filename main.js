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
  const navBar = document.querySelector('nav');


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
  var pathTwo = document.querySelector('#lineAnimationLineTwo');
  var length = path.getTotalLength();

  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition = 'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();  

  // Clear any previous transition
  pathTwo.style.transition = pathTwo.style.WebkitTransition = 'none';
  // Set up the starting positions
  pathTwo.style.strokeDasharray = length + ' ' + length;
  pathTwo.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  pathTwo.getBoundingClientRect();  

  const portfolioContainer = document.querySelector('section.portfolio');

  window.addEventListener('scroll', () => {
    
    // What % down is it?
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);


    // Length to offset the dashes
    var drawLength = length * scrollPercentage * 5.5;
    var drawLengthTwo = length * scrollPercentage * 4.75;

    // Draw in reverse
    path.style.strokeDashoffset = length - drawLength;
    pathTwo.style.strokeDashoffset = length - drawLengthTwo;


    // Functions
    function toggleOffPortfolio(){
      if (drawLength > 6200) {
        path.style.opacity = '0';
      } else {
        return
      }
    }
    toggleOffPortfolio();

    function toggleOffAbout(){
      if (drawLengthTwo > 11500) {
        pathTwo.style.opacity = '0'
      } else {
        return
      }
    }
    toggleOffAbout();
  });



// parallax animation 
  window.addEventListener('scroll', function(e) {

    const target = document.querySelectorAll('#scroll');


    var index = 0, length = target.length;
    for(index; index < length; index++) {
      var pos = window.pageYOffset * target[index].dataset.rate;

      if(target[index].dataset.direction === 'vertical'){
        target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
      
      } else if (target[index].dataset.direction === 'horizontal') {
        var posX = window.pageYOffset * target[index].dataset.ratex;
        target[index].style.transform = 'translate3d('+pos+'px, 0px, 0px)';

      } else if (target[index].dataset.direction === 'opacityAndScale') {
        var posX = window.pageYOffset * target[index].dataset.ratex;
        target[index].style.opacity = 'calc(1 - '+pos+')';
        //target[index].style.transform = 'scale(calc(1 + '+pos+' * 0.3), calc(1 + '+pos+' * 0.3))';
      
      } else {
        return
      }
    }

  });




// burger menu toggle
  const nav = document.querySelector('nav');

  trigger.addEventListener('click', function(){
    nav.classList.toggle('active');
  });




// intersection observer
  const portfolio = document.querySelector('.portfolio');
  const animationLine = document.querySelectorAll('.lineAnimationContainer');
  const sections = document.querySelectorAll('section');
  const options = { 
    root: null, // it is the viewport.
    threshold: 0.15, // 0 to 1 scale.
    rootMargin: "-50px"
  };
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      } else {
        observer.unobserve(entry.target);
        entry.target.classList.toggle('active');
      }
    });
  }, options);


  sections.forEach(section => {
    observer.observe(section);
  });


// my work
const myWorkButton = document.querySelector('button.myWork');

myWorkButton.addEventListener('click', () => {
  window.scrollTo(0, 700);
});