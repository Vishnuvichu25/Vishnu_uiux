const sections = document.querySelectorAll(".reveal");

function revealSections(){

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if(top < trigger){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);