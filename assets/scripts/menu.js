class Menu {
  constructor() {
    const tabletScreenQuery = 992;

    this.tabletScreenSize = window.matchMedia(`(max-width: ${tabletScreenQuery}px)`);
    this.isMenuEnabled = false;
    this.scrollLinks = document.querySelectorAll('.scrollLink');
    this.mainMenu = document.querySelector('[role=menu]');
    this.buttonCloser = document.querySelector('.buttonCloser');
    this.buttonToggler = document.querySelector('.buttonToggler');
  }

  toggleMenu() {
    if (this.tabletScreenSize.matches) {
      if (this.isMenuEnabled) {
        this.mainMenu.style.display = 'none';
        this.buttonCloser.style.display = 'none';
        this.isMenuEnabled = false;
      } else {
        this.mainMenu.style.display = 'inline-block';
        this.buttonCloser.style.display = 'inline-block';
        this.isMenuEnabled = true;
      }
    }
  }

  enableScrollLinksControls() {
    const menu = this;

    this.scrollLinks.forEach(function(scrollLink) {
      scrollLink.addEventListener('click', menu.toggleMenu.bind(menu));
    });

    return this;
  }

  enableMenuVisibilityControls() {    
    this.buttonToggler.addEventListener('click', this.toggleMenu.bind(this));
    this.buttonCloser.addEventListener('click', this.toggleMenu.bind(this));

    this.tabletScreenSize.addEventListener('change', function() {
      if (this.tabletScreenSize.matches && menu.isMenuEnabled) {
        this.mainMenu.style.display = 'inline-block';
        this.buttonCloser.style.display = 'inline-block';
      } else {
        this.buttonCloser.style.display = 'none';
      }
    });

    return this;
  }

  initialize() {
    this.enableMenuVisibilityControls();
    this.enableScrollLinksControls();
  }
}

new Menu().initialize();