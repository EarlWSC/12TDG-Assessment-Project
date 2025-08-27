const summary = document.querySelector('.summary');
const background = document.querySelector('.background');
const navbar = document.querySelector('.navbar');
const homebtn = document.querySelector('.homebtn');
const title =  document.querySelector('.title');


const tl = new TimelineMax();
tl.fromTo(background, 1.5, {x: -2000}, {x: 0},"-=0.9")
.fromTo(background, 1.5, {opacity: 0}, {opacity: 1}, "-=0.3")
.fromTo(navbar, 1, {y: -150}, {y: 0}, "-=1.5")
.fromTo(title, 1, {opacity: 0}, {opacity: 1}, "-=.75")
.fromTo(homebtn, 1, {x: -200}, {x:0}, "-=.75");
tl.fromTo(summary, 1, {x: 400}, {x:0}, "-=0.5");

const fadeScaleSelectors = ['.selection_page .linktitle','.video-section', '.Gallery', '.racephoto','.driversmanufacturers','.calendar img']; 
const fadeScaleEls = [];
fadeScaleSelectors.forEach(sel => {
	document.querySelectorAll(sel).forEach(el => {
		el.style.opacity = 0;
		el.style.transform = 'scale(0.8)';
		el.style.transition = 'opacity 1s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
		fadeScaleEls.push(el);
	});
});

function fadeScaleOnScroll() {
	const windowHeight = window.innerHeight || document.documentElement.clientHeight;
	fadeScaleEls.forEach(el => {
		const rect = el.getBoundingClientRect();
		if (rect.top < windowHeight - 100) {
			el.style.opacity = 1;
			el.style.transform = 'scale(1)';
		} else {
			el.style.opacity = 0;
			el.style.transform = 'scale(0.8)';
		}
	});
	fadeScaleDelayedEls.forEach(el => {
		const rect = el.getBoundingClientRect();
		if (rect.top < windowHeight - 100) {
			el.style.opacity = 1;
			el.style.transform = 'scale(1)';
		} else {
			el.style.opacity = 0;
			el.style.transform = 'scale(0.8)';
		}
	});
}
window.addEventListener('scroll', fadeScaleOnScroll);
window.addEventListener('resize', fadeScaleOnScroll);
fadeScaleOnScroll();