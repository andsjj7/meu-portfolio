class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
                ? (link.style.animation = '')
                : (link.style.animation = `navLinkFade 0.5s ease forwards 0.4s`);
        });
    }
    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }


addClickEvent(){
    this.mobileMenu.addEventListener('click', this.handleClick);
} 

Init() {
    if (this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
    }
}

const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
);
mobileNavbar.Init();

window.sr = ScrollReveal({reset: true});

sr.reveal('.area-1', {rotate: {x: 0, y: 90, z: 0}},
     { duration: 2000} );
sr.reveal('.area-2',{rotate: {x: 90, y: 90, z: 0}},
     { duration: 2000});
sr.reveal('.area-3', {rotate: {x: 0, y: 100, z: 90}}, 
{ duration: 2000});
sr.reveal('.area-4', {rotate: {x: 0, y: 100, z: 90}}, 
{ duration: 2000});
