'use strict';

// Mobile menu pop up

const menuBadge = document.querySelector('.menu-badge');
const navLinks = document.querySelector('.nav-links');
const homeLink = document.querySelector('.home');
const workLink = document.querySelector('.work');
const aboutLink = document.querySelector('.about');
const hireLink = document.querySelector('.hire');
const cancel = document.querySelector('.cancel');

menuBadge.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

cancel.addEventListener('click', () => {
    navLinks.classList.remove('open');
});

homeLink.addEventListener('click', () => {
    navLinks.classList.remove('open');
});

workLink.addEventListener('click', () => {
    navLinks.classList.remove('open');
});

aboutLink.addEventListener('click', () => {
    navLinks.classList.remove('open');
});

hireLink.addEventListener('click', () => {
    navLinks.classList.remove('open');
});

// Card switch

const uiCard = document.querySelector('.UI-card');
const frontEndCard = document.querySelector('.frontend-card');
const logoCard = document.querySelector('.logo-card');

const uiSwitch = document.querySelector('.UI-switch')
const frontEndSwitch = document.querySelector('.frontend-switch')
const logoSwitch = document.querySelector('.logo-switch')

uiSwitch.addEventListener('click', () => {
    uiSwitch.classList.add('switch-active');
    frontEndSwitch.classList.remove('switch-active');
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "1";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "0";
});

frontEndSwitch.addEventListener('click', () => {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.add('switch-active')
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "1";
    logoCard.style.zIndex = "0";
});

logoSwitch.addEventListener('click', () => {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.remove('switch-active')
    logoSwitch.classList.add('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "1";
})


// Fullpage scripts + GSAP 3

var tl = gsap.timeline({
    delay: 0
});

// home page load anim
if (window.innerWidth < 1194) {

    tl.from('.home-heading h1', {
            opacity: 0,
            top: "30%",
            duration: 1.5,
            ease: "power2.inOut"
        })
        .from('.content', {
            opacity: 0,
            bottom: "60%",
            duration: 1.5,
            ease: "power2.inOut",
        }, '-=1.2')
        .from('.scroll-action', {
            opacity: 0,
            duration: 1,
            bottom: "10%",
            ease: "power1.inOut"
        }, "-=0.5");
}

/* JavaScript Media Queries */

//tablet
if (window.innerWidth >= 1194 && window.innerWidth < 1920) {
    // Home page
    tl.from('.home-heading h1', {
            opacity: 0,
            right: "10%",
            duration: 1.5,
            ease: "power2.inOut"
        })
        .from('.content', {
            opacity: 0,
            left: "10%",
            duration: 1.5,
            ease: "power2.inOut",
        }, '-=1.2')
        .from('.scroll-action', {
            opacity: 0,
            duration: 1,
            bottom: "10%",
            ease: "power1.inOut"
        }, "-=0.5");
}

//desktop

if (window.innerWidth >= 1920) {
    // Home page
    tl.from('.home-heading h1', {
            opacity: 0,
            right: "10%",
            duration: 1.5,
            ease: "power2.inOut"
        })
        .from('.content', {
            opacity: 0,
            left: "10%",
            duration: 1.5,
            ease: "power2.inOut",
        }, '-=1.2')
        .from('.scroll-action', {
            opacity: 0,
            duration: 1,
            bottom: "10%",
            ease: "power1.inOut"
        }, "-=0.5");
}


new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;


        /* Mobile = less than 1194 */
        if (window.innerWidth >= 0 && window.innerWidth < 1194) {

            // Home page
            if (destination.index === 0) {

                tl.from('.home-heading h1', {
                        opacity: 0,
                        top: "30%",
                        duration: 1.5,
                        ease: "power2.inOut"
                    })
                    .from('.content', {
                        opacity: 0,
                        top: "30%",
                        duration: 1.5,
                        ease: "power1.inOut",
                    }, '-=1.2')
                    .from('.scroll-action', {
                        opacity: 0,
                        duration: 1,
                        top: "80%",
                        ease: "power3.inOut"
                    });
            };

            // Work page
            if (destination.index === 1) {
                tl.from('.work-heading', {
                        opacity: 0,
                        right: "20%",
                        duration: 1.5,
                        ease: "power2.inOut"
                    })
                    .from('.show-more-button', {
                        opacity: 0,
                        duration: .5,
                        ease: "power1.inOut"
                    }, "-=1")
                    .from('.laptop', {
                        opacity: 0,
                        top: "80%",
                        duration: 1.5,
                        ease: "power2.inOut"
                    }, "-=1.5")
            };

            // About page
            if (destination.index === 2) {
                tl.from('.about-heading', {
                        opacity: 0,
                        right: "20%",
                        duration: 2,
                        ease: "power3.inOut"
                    })
                    .from('.learn-more-button', {
                        opacity: 0,
                        left: "20%",
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=2")
                    .from('.overlap-background', {
                        opacity: 0,
                        duration: 2,
                        ease: "power4.inOut"
                    }, "-=2")
                    .from('.about-cards-holder', {
                        top: "150%",
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=1.5")
                    .from('.switchers', {
                        opacity: 0,
                        top: "150%",
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=2")
            }

            // Hire page
            if (destination.index === 3) {
                tl.from('.hire-heading', {
                        opacity: 0,
                        right: "15%",
                        duration: 2,
                        ease: "power3.inOut"
                    })
                    .from('footer', {
                        opacity: 0,
                        duration: 1.5,
                        left: "20%",
                        ease: "power3.inOut"
                    }, "-=1.5")
                    .from('.hire-form', {
                        top: "100%",
                        duration: 2,
                        ease: "power1.inOut"
                    }, "-=1")
            }
        }

        /* Tablet = more than 1194px */
        if (window.innerWidth >= 1194 && window.innerWidth < 1920) {

            // Home page
            if (destination.index === 0) {

                tl.from('.home-heading h1', {
                        opacity: 0,
                        right: "10%",
                        duration: 1.5,
                        ease: "power2.inOut"
                    })
                    .from('.content', {
                        opacity: 0,
                        left: "10%",
                        duration: 1.5,
                        ease: "power1.inOut",
                    }, '-=1.2')
                    .from('.scroll-action', {
                        opacity: 0,
                        duration: 1,
                        top: "80%",
                        ease: "power3.inOut"
                    });
            };

            // Work page
            if (destination.index === 1) {
                tl.from('.work-heading', {
                        opacity: 0,
                        right: "20%",
                        duration: 1.5,
                        ease: "power2.inOut"
                    })
                    .from('.show-more-button', {
                        opacity: 0,
                        duration: .5,
                        ease: "power1.inOut"
                    }, "-=1")
                    .from('.laptop', {
                        opacity: 0,
                        left: "20%",
                        duration: 1.5,
                        ease: "power2.inOut"
                    }, "-=1")
            };

            // About page
            if (destination.index === 2) {
                tl.from('.about-heading', {
                        opacity: 0,
                        right: "5%",
                        duration: 2,
                        ease: "power3.inOut"
                    })
                    .from('.purple-line-about', {
                        opacity: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=2")
                    .from('.learn-more-button', {
                        opacity: 0,
                        left: "20%",
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=2")
                    .from('.overlap-background-tablet', {
                        opacity: 0,
                        duration: 2,
                        ease: "power4.inOut"
                    }, "-=2")
                    .from('.about-cards-holder', {
                        top: "150%",
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=1.5")
                    .from('.switchers', {
                        opacity: 0,
                        top: "150%",
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=2")
            }

            // Hire page
            if (destination.index === 3) {
                tl.from('.hire-heading', {
                        opacity: 0,
                        left: "8%",
                        duration: 2,
                        ease: "power3.inOut"
                    })
                    .from('footer', {
                        opacity: 0,
                        duration: 1.5,
                        left: "20%",
                        ease: "power3.inOut"
                    }, "-=1.5")
                    .from('.hire-form', {
                        top: "100%",
                        duration: 2,
                        ease: "power1.inOut"
                    }, "-=1")
            }
        }

        /* Desktop */
        if (window.innerWidth >= 1920) {
            // Home page
            if (destination.index === 0) {

                tl.from('.home-heading h1', {
                        opacity: 0,
                        right: "10%",
                        duration: 1.5,
                        ease: "power2.inOut"
                    })
                    .from('.content', {
                        opacity: 0,
                        left: "10%",
                        duration: 1.5,
                        ease: "power1.inOut",
                    }, '-=1.2')
                    .from('.scroll-action', {
                        opacity: 0,
                        duration: 1,
                        top: "80%",
                        ease: "power3.inOut"
                    });
            };

            // Work page
            if (destination.index === 1) {
                tl.from('.work-heading', {
                        opacity: 0,
                        right: "20%",
                        duration: 1.5,
                        ease: "power2.inOut"
                    })
                    .from('.show-more-button', {
                        opacity: 0,
                        duration: .5,
                        ease: "power1.inOut"
                    }, "-=1")
                    .from('.laptop', {
                        opacity: 0,
                        left: "20%",
                        duration: 1.5,
                        ease: "power2.inOut"
                    }, "-=1")
            };

            // About page
            if (destination.index === 2) {
                tl.from('.about-heading', {
                        opacity: 0,
                        right: "5%",
                        duration: 2,
                        ease: "power3.inOut"
                    })
                    .from('.purple-line-about', {
                        opacity: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=2")
                    .from('.learn-more-button', {
                        opacity: 0,
                        left: "20%",
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=2")
                    .from('.overlap-background-tablet', {
                        opacity: 0,
                        duration: 1,
                        ease: "power4.inOut"
                    }, "-=2")
                    .from('.about-cards-holder', {
                        top: "150%",
                        duration: 2,
                        ease: "power3.inOut"
                    }, "-=1.5")
            }

            // Hire page
            if (destination.index === 3) {
                tl.from('.hire-heading', {
                        opacity: 0,
                        left: "8%",
                        duration: 2,
                        ease: "power3.inOut"
                    })
                    .from('footer', {
                        opacity: 0,
                        duration: 1.5,
                        left: "20%",
                        ease: "power3.inOut"
                    }, "-=1.5")
                    .from('.hire-form', {
                        top: "100%",
                        duration: 2,
                        ease: "power1.inOut"
                    }, "-=1")
            }
        }
    }
});