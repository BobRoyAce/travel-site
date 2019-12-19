class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon");
    this.menuContent = document.querySelector(".site-header__menu-content");
    this.siteHeader = document.querySelector(".site-header");
    this.events();
  }
  
  events() {
    /* We have to pass an "arrow function" to the addEventListener method so as not
       to change what 'this' points to. If we just passed the name of the function, not
       as an arrow function, then 'this' would point to the menuIcon (the thing responding 
       to the event), rather than to the overall class/object.  */
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }

  /*  */
  toggleTheMenu() {
    /*
      If the site-header__menu-content--is-visible class is assigned to the 
      menuContent, then remove it; otherwise, add it.
    */
    this.menuContent.classList.toggle("site-header__menu-content--is-visible");

    /* Toggle class to indicate whether or not site header is expanded. */
    this.siteHeader.classList.toggle("site-header--is-expanded");

    /* Toggle whether or not an X should be shown where the menu icon was. */
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;