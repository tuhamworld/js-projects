const kits = ['crash', 'kick', 'snare', 'tom'];

const containerEL = document.querySelector('.container');

kits.forEach(kit => {

    const btnEl = document.createElement('button');
    btnEl.innerText = kit;
    btnEl.classList.add('btn');
    btnEl.style.backgroundImage = 'url(../images/' + kit + '.png)';

    containerEL.appendChild(btnEl);
    const audioEl = document.createElement('audio');
    audioEl.src = '../sounds/' + kit + '.mp3';
    containerEL.appendChild(audioEl);

    btnEl.addEventListener('click', () => {
        audioEl.play();
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = 'scale(.9)';

            setTimeout(() => {
                btnEl.style.transform = 'scale(1)';
            }, 100)
        }

    })
})