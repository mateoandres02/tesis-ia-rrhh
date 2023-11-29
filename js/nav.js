export function navlinks() {
    
    const $nav = document.querySelector('.nav');
    const $navLinks = document.querySelector('.nav-links');
    const $hoverNavLinks = document.querySelector('.nav-links-hover');

    $nav.addEventListener('mouseover', () => {
        $navLinks.style.display = "none";
        $hoverNavLinks.style.display = "flex";
    })
    
    $nav.addEventListener('mouseout', () => {
        $navLinks.style.display = "flex";
        $hoverNavLinks.style.display = "none";
    })
    
}