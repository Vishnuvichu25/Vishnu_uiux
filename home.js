window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";

    setTimeout(() => {

        heroContent.style.transition =
            "all 1s ease";

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";

    }, 200);

});


// Glow Movement

const glow = document.querySelector(".hero-glow");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    glow.style.transform =
        `translate(${x}px, ${y}px)`;

});