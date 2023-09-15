class CarouselControl {
  constructor(carouselClass, nextButtonClass, prevButtonClass) {
    this.scrollForceNext = 200;
    this.scrollForcePrev = -200;
    this.carouselClass = carouselClass;
    this.carousel = document.querySelector(carouselClass);
    this.nextButton = document.querySelector(nextButtonClass);
    this.prevtButton = document.querySelector(prevButtonClass);
  }

  scrollNext() {
    this.carousel.scrollBy(this.scrollForceNext, 0);
  }

  scrollPrev() {
    this.carousel.scrollBy(this.scrollForcePrev, 0);
  }

  addListeners() {
    this.nextButton.addEventListener('click', this.scrollNext.bind(this));
    this.prevtButton.addEventListener('click', this.scrollPrev.bind(this));
  }
  
  initialize() {
    this.addListeners();
  }
}

new CarouselControl(
  '.experiencesCarousel',
  '.nextExperience',
  '.prevExperience',
)
.initialize();

new CarouselControl(
  '.projectsCarousel',
  '.nextProject',
  '.prevProject',
)
.initialize();