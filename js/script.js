document.getElementById("about-me").addEventListener("click", moveAboutMe);
document.getElementById("formacion-institucional").addEventListener("click", moveFormInst);
document.getElementById("experiencia-laboral").addEventListener("click", moveExpLab);
document.getElementById("skills").addEventListener("click", moveSkills);
document.getElementById("cursos-autodidactas").addEventListener("click", moveCursosAuto);

function moveAboutMe() {
    $('#main-content section').hide();
    $('#about-me-section').show();
};

function moveFormInst() {
    $('#main-content section').hide();
    $('#formacion-institucional-section').show();
};

function moveExpLab() {
    $('#main-content section').hide();
    $('#experiencia').show();
};

function moveSkills() {
    $('#main-content section').hide();
    $('section#skills').show();
};

function moveCursosAuto() {
    $('#main-content section').hide();
    $('section#cursos-autodidactas').show();
};

