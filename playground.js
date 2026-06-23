/* =========================
REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if (top < trigger) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

/* =========================
VIDEO MODAL
========================= */

const modal = document.getElementById("videoModal");
const video = document.getElementById("projectVideo");

document.querySelectorAll(".open-modal").forEach(button => {

    button.addEventListener("click", () => {

        const videoSource = button.dataset.video;

        if (!videoSource) return;

        video.src = videoSource;

        modal.classList.add("active");

        video.load();

        video.play();

    });

});

/* =========================
CLOSE MODAL
========================= */

function closeVideoModal() {

    modal.classList.remove("active");

    video.pause();

    video.currentTime = 0;

    video.src = "";

}

const closeBtn = document.querySelector(".close-modal");

if (closeBtn) {

    closeBtn.addEventListener("click", closeVideoModal);

}

if (modal) {

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            closeVideoModal();

        }

    });

}

/* =========================
ESC KEY CLOSE
========================= */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && modal.classList.contains("active")) {

        closeVideoModal();

    }

});