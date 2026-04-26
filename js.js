// تأثير ظهور العناصر عند التمرير
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('section');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}

// تهيئة العناصر لتكون مخفية في البداية
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease-out";
});