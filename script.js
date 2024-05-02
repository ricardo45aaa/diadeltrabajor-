document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las imágenes
    const imagenes = document.querySelectorAll(".imagen");
    let indiceImagenActual = 0;

    // Poemas asociados a cada imagen
    const poemas = [
        "En cada paso que das, un nuevo camino se abre ante ti. ¡Feliz Día del Trabajador!",
        "Con tu esfuerzo y dedicación, construyes un mundo mejor. ¡Felicidades en tu día!",
        "Detrás de cada logro hay un trabajo arduo. ¡Celebra tu día con orgullo y alegría!"
        // Puedes agregar más poemas para cada imagen aquí
    ];

    // Obtener el elemento del mensaje
    const mensajeElemento = document.getElementById("mensaje");

    // Agregar un event listener a cada imagen para manejar el clic
    imagenes.forEach(function(imagen, index) {
        imagen.addEventListener("click", function() {
            // Ocultar la imagen actual
            imagenes[indiceImagenActual].classList.remove("visible");
            // Mostrar la siguiente imagen
            indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
            imagenes[indiceImagenActual].classList.add("visible");
            // Mostrar el poema asociado a la imagen
            mensajeElemento.textContent = poemas[indiceImagenActual];
        });
    });
});
