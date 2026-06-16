const reveals = document.querySelectorAll('.reveal');

function revealSections(){

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if(top < trigger){
            section.classList.add('active');
        }

    });

}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

/* =========================
VIDEO MODAL
========================= */

const modal = document.getElementById('videoModal');
const video = document.getElementById('projectVideo');

document.querySelectorAll('.open-modal').forEach(button => {

    button.addEventListener('click', () => {

        const videoSource = button.dataset.video;

        video.src = videoSource;

        modal.classList.add('active');

        video.play();

    });

});

function closeVideoModal(){

    modal.classList.remove('active');

    video.pause();

    video.currentTime = 0;

    video.src = '';

}

document
    .querySelector('.close-modal')
    .addEventListener('click', closeVideoModal);

modal.addEventListener('click', (e) => {

    if(e.target === modal){

        closeVideoModal();

    }

});