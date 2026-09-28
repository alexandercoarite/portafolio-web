function irProyectos() {
    document.getElementById("proyectos").scrollIntoView({
        behavior: "smooth"
    });
}

function irContacto() {
    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });
}

function verProyecto(proyecto) {
    const enlaces = {
        gimnasio: "https://alexandercoarite.github.io/pagina-gimnasio/",
        tecnologia: "https://alexandercoarite.github.io/techstore/",
        barberia: "https://alexandercoarite.github.io/black-crown-barber/",
        restaurante: "https://alexandercoarite.github.io/sabor-urbano/",
        dental: "https://alexandercoarite.github.io/dentalcare/"
    };

    if (enlaces[proyecto]) {
        window.open(enlaces[proyecto], "_blank");
    }
}

function abrirWhatsApp() {
    const telefono = "59100000000";
    const mensaje = "Hola Alexander, vi tu portafolio y estoy interesado en una página web.";

    const enlace =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(enlace, "_blank");
}

const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipoPagina = document.getElementById("tipoPagina").value;
    const mensaje = document.getElementById("mensaje").value;

    const textoWhatsApp =
        "Hola Alexander. Mi nombre es " +
        nombre +
        ". Estoy interesado en: " +
        tipoPagina +
        ".\n\n" +
        mensaje;

    const telefono = "59100000000";

    const enlace =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(textoWhatsApp);

    window.open(enlace, "_blank");
});