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