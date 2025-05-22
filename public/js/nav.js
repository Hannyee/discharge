let lastScrollTop = 0;
const nav = document.querySelector('.top-nav');
const scrollThreshold = 50; // Minimum scroll amount before hiding/showing nav

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Determine scroll direction and amount
    if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        lastScrollTop = currentScroll;
    }
}); 