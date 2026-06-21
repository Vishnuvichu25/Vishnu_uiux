window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";

    setTimeout(() => {

        heroContent.style.transition = "all 1s ease";

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";

    }, 200);

});

/* Mouse Parallax */

const blobs = document.querySelectorAll(".blob");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    blobs.forEach((blob, index) => {

        const speed = (index + 1) * 0.3;

        blob.style.marginLeft = `${x * speed}px`;
        blob.style.marginTop = `${y * speed}px`;

    });

});