const scrollForceNext = 200;
const scrollForcePrev = -200;

const experiencesCarousel = document.querySelectorAll('.experiencesCarousel')[0];
const projectsCarousel = document.querySelectorAll('.projectsCarousel')[0];

function experiencesCarouselScrollToLeft() {
  experiencesCarousel.scrollBy(scrollForcePrev, 0);
}

function experiencesCarouselScrollToRight() {
  experiencesCarousel.scrollBy(scrollForceNext, 0);
}

function projectsCarouselScrollToLeft() {
  projectsCarousel.scrollBy(scrollForcePrev, 0);
}

function projectsCarouselScrollToRight() {
  projectsCarousel.scrollBy(scrollForceNext, 0);
}