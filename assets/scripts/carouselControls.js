const experiencesCarousel = document.querySelectorAll('[role=experiencesCarousel]')[0];
const projectsCarousel = document.querySelectorAll('[role=projectsCarousel]')[0];

function experiencesCarouselScrollToLeft() {
  experiencesCarousel.scrollBy(-200, 0);
}

function experiencesCarouselScrollToRight() {
  experiencesCarousel.scrollBy(200, 0);
}

function projectsCarouselScrollToLeft() {
  projectsCarousel.scrollBy(-100, 0);
}

function projectsCarouselScrollToRight() {
  projectsCarousel.scrollBy(100, 0);
}