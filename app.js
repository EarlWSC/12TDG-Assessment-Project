const background = document.querySelector('.background');
const navbar = document.querySelector('.navbar');
const homebtn = document.querySelector('.homebtn');
const title =  document.querySelector('.title');

const tl = new TimelineMax();
tl.fromTo(background, 1.5,{x: -2000}, {x:0},)
.fromTo(navbar, 1, {y: -100}, {y: 0}, "-=0.75")
.fromTo(homebtn, 1, {x: -300}, {x: 0},"-=.5")
.fromTo(title, 1, {opacity:0}, {opacity:1},"-=.5");