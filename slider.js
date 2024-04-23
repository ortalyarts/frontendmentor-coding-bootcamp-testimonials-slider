const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const allSlides = Array.from(document.querySelectorAll('.slide'));
let index = 0;

const toggleActiveSlide = () => {
    allSlides.forEach((item) => {
        if(item.classList.contains('active-slide')){
            item.classList.remove('active-slide')
        }
      })
      document.querySelector(`#slide-${index}`).classList.add('active-slide');
}

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  if(index<(allSlides.length - 1)){
    index++; 
  }
  toggleActiveSlide();
  
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  if(index>0){
    index--;
  }
  toggleActiveSlide();
  
});
