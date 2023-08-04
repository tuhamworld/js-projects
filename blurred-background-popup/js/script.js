const containerEL = document.querySelector('.container');
const btnEl = document.querySelector('.btn');
const popUpContainerEl = document.querySelector('.popup-container');
const closeIconEl = document.querySelector('.close-icon');

btnEl.addEventListener('click', () => {
    containerEL.classList.add('active');
    popUpContainerEl.classList.remove('active');
})

closeIconEl.addEventListener('click', () => {
    popUpContainerEl.classList.add('active');
    containerEL.classList.remove('active');
})