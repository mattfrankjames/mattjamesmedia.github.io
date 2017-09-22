class SideNav {
  constructor() {
    this._sideNavEl = document.querySelector('.nav');
    this._openButton = document.querySelector('.header__menu--toggle');
    this._closeButton = document.querySelector('.nav__close');
    this._sideNavContainer = document.querySelector('.nav__container');

    this.toggleNav = this.toggleNav.bind(this);
    this.blockClicks = this.blockClicks.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.update = this.update.bind(this);

    this.startX = 0;
    this.currentX = 0;
    this.touchingSideNav = false;

    // this.supportsPassive = undefined;
    this.addEventListeners();
  }

  addEventListeners() {
    this._openButton.addEventListener('click', this.toggleNav);
    this._closeButton.addEventListener('click', this.toggleNav);
    this._sideNavEl.addEventListener('click', this.toggleNav);
    this._sideNavContainer.addEventListener('click', this.blockClicks);

    this._sideNavContainer.addEventListener('touchstart', this.onTouchStart);
    this._sideNavContainer.addEventListener('touchmove', this.onTouchMove);
    this._sideNavContainer.addEventListener('touchend', this.onTouchEnd);
  }

  onTouchStart(e) {
    if (!this._sideNavEl.classList.contains('nav--visible'))
      return;
    // e.preventDefault();
    this.startX = e.touches[0].pageX;
    this.currentX = this.startX;

    this.touchingSideNav = true;
    requestAnimationFrame(this.update)
  }

  onTouchMove(e) {
    if(!this.touchingSideNav)
      return;
    this.currentX = e.touches[0].pageX;
    // const translateX = this.currentX - this.startX;
    // this._sideNavEl.style.transform = `${translateX}`;
  }

  onTouchEnd(e) {
    if (!this.touchingSideNav)
      return;

    this.touchingSideNav = false;

    const translateX = Math.min(0, this.currentX - this.startX);
    this._sideNavContainer.style.transform = '';

    if(translateX < 0) {
      this.toggleNav();
    }
  }

  update() {
    if (!this.touchingSideNav)
      return;

    requestAnimationFrame(this.update);
    const translateX = Math.min(0, this.currentX - this.startX);
    this._sideNavContainer.style.transform = `translateX(${translateX}px)`;
  }

  blockClicks(e) {
    e.stopPropagation();
  }

  onTransitionEnd(e) {
    this._sideNavEl.classList.remove('nav--animate');
    this._sideNavEl.removeEventListener('transitionend', this.onTransitionEnd);
  }

  // showNav() {
  //   this._sideNavEl.classList.toggle('nav--visible');
  //   this._sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
  // }
  toggleNav() {
    this._sideNavEl.classList.add('nav--animate');
    this._sideNavEl.classList.toggle('nav--visible');
    this._sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
  }
}

const nav = new SideNav();

export default nav;