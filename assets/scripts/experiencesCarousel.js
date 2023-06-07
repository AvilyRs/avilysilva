const experiencesCarousel = document.querySelectorAll('[role=experiences-carousel]')[0];

function experiencesCarouselScrollToLeft() {
  experiencesCarousel.scrollBy(-200, 0);
}

function experiencesCarouselScrollToRight() {
  experiencesCarousel.scrollBy(200, 0);
}