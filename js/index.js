const imageBoxes = document.querySelectorAll('.image-box');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

imageBoxes.forEach(box => {
    observer.observe(box);
});