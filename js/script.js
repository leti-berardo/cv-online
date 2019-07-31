document.getElementById("about-me").addEventListener("click", moveAboutMe);
// document.getElementById("formacion-institucional").addEventListener("click", moveFormInst);
// document.getElementById("experiencia-laboral").addEventListener("click", moveExpLab);
// document.getElementById("skills").addEventListener("click", moveSkills);
// document.getElementById("cursos-autodidactas").addEventListener("click", moveCursosAuto);

function moveAboutMe() {
    let aboutMe = document.getElementByClassName("active");
    let inactive = document.getElementsByClassName("inactive");
    $(aboutMe).show();
    $(inactive).hide();
};

