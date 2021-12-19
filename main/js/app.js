function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
  
  function handleScroll() {
    const elems = document.querySelectorAll('.up');
    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -30)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(50px)';
  
      } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
  
      }
    })
  }
  
  window.addEventListener('scroll', handleScroll);

  var myPath = document.querySelector(".cls-2");
  var length = myPath.getTotalLength();
  console.log(length);