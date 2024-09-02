// document.addEventListener("DOMContentLoaded", function () {
//     // Animação da imagem

//     // Animação de entrada para h1
//     const h1 = document.querySelector(".title-home");
//     h1.style.opacity = 1;
//     h1.style.transform = "translateX(0)";

//     // Animação de entrada para h3
//     const h3 = document.querySelector(".color-1");
//     h3.style.opacity = 1;
//     h3.style.transform = "translateX(0)";
// });

// const img = document.querySelector("#home .full-moon");
// img.style.opacity = 1;
document.addEventListener("DOMContentLoaded", function () {

    // Função para parar a animação de piscar
    function stopBlinking(element, delay) {
        setTimeout(() => {
            element.style.animation = 'none';
        }, delay);
    }

    // Seleciona os elementos
    const h1 = document.querySelector(".title-home");
    const grafismo2 = document.querySelector(".grafismo2");
    const h3 = document.querySelector(".color-1");
    const grafismo1 = document.querySelector(".grafismo1");

    // Define a ordem e os tempos para parar de piscar
    stopBlinking(h1, 750); // Para de piscar após 2 segundos
    stopBlinking(grafismo2, 1000); // Para de piscar após 4 segundos
    stopBlinking(h3, 1250); // Para de piscar após 6 segundos
    stopBlinking(grafismo1, 1500); // Para de piscar após 8 segundos
});
