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