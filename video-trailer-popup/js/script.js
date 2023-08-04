const btnEL = document.querySelector('.btn');
const closeIcon = document.querySelector('.close-icon');
const trailerContainer = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');

btnEL.addEventListener('click', () => {
    trailerContainer.classList.remove('active');
})


closeIcon.addEventListener('click', () => {
    trailerContainer.classList.add('active');
    videoEl.pause();
    videoEl.currentTime = 0;
})