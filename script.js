document.querySelector('.cta-button').addEventListener('click', function() {
    alert('DOGE claimed successfully! 🚀');
});

// Parallax scrolling effect
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    document.querySelector(".parallax").style.backgroundPositionY = offset * 0.7 + "px";
});
