// Optional small enhancements - currently minimal

console.log("Portfolio site loaded successfully");

// Smooth scroll for any future internal anchors (if you add # links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
