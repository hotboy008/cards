const slides = document.querySelectorAll('.slide');

for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClasses('active');
        slide.classList.add('active');
    });
}

function clearActiveClasses(classes){
    slides.forEach(item => item.classList.remove(classes));
}