document.getElementById("gift-button").addEventListener("click", function() {
    // Ocultar el texto inicial y el botón
    document.querySelector(".container").style.display = "none";

    // Mostrar el contenedor de las flores y el mensaje
    document.getElementById("message-container").classList.remove("hidden");
    document.getElementById("flower-animation").classList.remove("hidden");

    // Función para crear flores amarillas
    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        document.getElementById('flower-animation').appendChild(flower);

        // Posición aleatoria en la pantalla
        flower.style.left = Math.random() * window.innerWidth + 'px';
        flower.style.top = Math.random() * window.innerHeight + 'px';
        flower.style.animationDuration = Math.random() * 3 + 3 + 's'; // Duración entre 3 y 6 segundos

        // Eliminar la flor después de la animación
        setTimeout(() => {
            flower.remove();
        }, 6000);
    }

    // Generar flores continuamente
    setInterval(createFlower, 500);
});
