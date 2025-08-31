// GSAP Animations
const background = document.querySelector('.background');
const navbar = document.querySelector('.navbar');
const homebtn = document.querySelector('.homebtn');
const title =  document.querySelector('.title');
const summary = document.querySelector('.summary');
const subtitle = document.querySelector('.subtitle');


const tl = new TimelineMax();
tl.fromTo(background, 1.5, {x: -2000}, {x: 0},"-=0.9")
.fromTo(background, 1.5, {opacity: 0}, {opacity: 1}, "-=0.3")
.fromTo(navbar, 1, {y: -150}, {y: 0}, "-=1.5")
.fromTo(title, 1, {opacity: 0}, {opacity: 1}, "-=.75")
.fromTo(homebtn, 1, {x: -200}, {x:0}, "-=.75")
.fromTo(summary, 1, {x: 400}, {x:0}, "-=.75");
tl.fromTo(subtitle, 1, {opacity: 0}, {opacity: 1}, "-=1.25");


