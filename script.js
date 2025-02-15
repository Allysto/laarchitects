 // Scroll Animation Script
 const fadeInElements = document.querySelectorAll('.fade-in');

 const checkVisibility = () => {
   fadeInElements.forEach((element) => {
     const elementTop = element.getBoundingClientRect().top;
     const elementBottom = element.getBoundingClientRect().bottom;
     const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

     if (isVisible) {
       element.classList.add('visible');
     } else {
       element.classList.remove('visible');
     }
   });
 };

 window.addEventListener('scroll', checkVisibility);
 window.addEventListener('load', checkVisibility);