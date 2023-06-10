const experiencesCarousel = document.querySelectorAll('[role=experiencesCarousel]')[0];

function experiencesCarouselScrollToLeft() {
  experiencesCarousel.scrollBy(-200, 0);
}

function experiencesCarouselScrollToRight() {
  experiencesCarousel.scrollBy(200, 0);
}