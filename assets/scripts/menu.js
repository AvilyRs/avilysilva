document.addEventListener('DOMContentLoaded', function() {
  // Menu Visibility
  const tabletScreenQuery = 992;

  let isMenuEnabled = false;

  const mainMenu = document.querySelectorAll('[role=menu')[0];
  const togglerButton = document.querySelectorAll('[role=menu-toggler]')[0];
  const closerButton = document.querySelectorAll('[role=menu-closer]')[0];

  const tabletScreenSize = window.matchMedia(`(max-width: ${tabletScreenQuery}px)`);

  tabletScreenSize.addEventListener('change', function() {
    if (tabletScreenSize.matches && isMenuEnabled) {
      mainMenu.style.display = 'inline-block';
      closerButton.style.display = 'inline-block';
    } else {
      closerButton.style.display = 'none';
    }
  })

  function onTogglerMenu() {
    if (tabletScreenSize.matches) {
      if (isMenuEnabled) {
        mainMenu.style.display = 'none';
        closerButton.style.display = 'none';
        isMenuEnabled = false;
      } else {
        mainMenu.style.display = 'inline-block';
        closerButton.style.display = 'inline-block';
        isMenuEnabled = true;
      }
    }
  }

  togglerButton.addEventListener('click', onTogglerMenu);
  closerButton.addEventListener('click', onTogglerMenu);

  // Scroll Links
  const scrollLinks = document.querySelectorAll('.scrollLink');

  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener('click', onTogglerMenu);
  });
});