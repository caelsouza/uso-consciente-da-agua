// MENU HAMBÚRGUER

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// MODO ESCURO

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.textContent = "☀️";
    }else{
        darkModeBtn.textContent = "🌙";
    }

});


// VALIDAÇÃO DO FORMULÁRIO

const form = document.getElementById("contactForm");
const status = document.getElementById("mensagemStatus");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
        status.textContent =
        "Preencha todos os campos!";
        status.style.color = "red";

        return;
    }

    status.textContent =
    "Mensagem enviada com sucesso!";
    status.style.color = "green";

    form.reset();

});