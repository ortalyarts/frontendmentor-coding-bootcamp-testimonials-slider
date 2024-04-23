
(function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;
  
    function displayWindowSize() {
      let myWidth = window.innerWidth;
  
      if (myWidth <= 800) {
        const imgHeight = (document.querySelector('.img-holder img').clientHeight) / 16 - 1.25;
        document.querySelector('.buttons-holder').style.top = `${imgHeight}rem`;
      } else {
        document.querySelector('.buttons-holder').style.top = `initial`;
      }
    };
  
  
  })();