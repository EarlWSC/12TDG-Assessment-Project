const fadeScaleSelectors = ['.selection_page .linktitle', '.video-section', '.racephoto', '.calendar img'];
const fadeScaleEls = [];

// Initialize fadeScale elements
fadeScaleSelectors.forEach(sel => {
  document.querySelectorAll(sel).forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'scale(0.8)';
    el.style.transition = 'opacity 1s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
    fadeScaleEls.push(el);

    // Add hover effect
    if (sel === '.selection_page .linktitle', '.video-section video', '.racephoto', '.calendar img') {
      el.addEventListener('mouseover', () => {
        el.style.transform = 'scale(1.05)';
        el.style.zIndex = '2';
      });
      el.addEventListener('mouseout', () => {
        el.style.transform = 'scale(1)';
        el.style.zIndex = '1';
      });
    }
  });
});

// Scroll-based fade and scale effect
function fadeScaleOnScroll() {
	const windowHeight = window.innerHeight || document.documentElement.clientHeight;
	fadeScaleEls.forEach(el => {
	  const rect = el.getBoundingClientRect();
	  if (rect.top < windowHeight - 100) {
		el.style.opacity = 1;
  
		// Check if the element is being hovered
		if (el.matches('.selection_page .linktitle:hover')) {
		  el.style.transform = 'scale(1.05)';
		} else {
		  el.style.transform = 'scale(1)';
		}
	  } else {
		el.style.opacity = 0;
		el.style.transform = 'scale(0.8)';
	  }
	});
  }

// Attach scroll and resize event listeners
window.addEventListener('scroll', fadeScaleOnScroll);
window.addEventListener('resize', fadeScaleOnScroll);
fadeScaleOnScroll();