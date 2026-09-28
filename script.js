function irProyectos() {

    document
        .getElementById("proyectos")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function irContacto() {

    document
        .getElementById("contacto")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function verProyecto(proyecto) {

    if (proyecto === "gimnasio") {

        alert(
            "Aquí colocarás el enlace de tu página del gimnasio."
        );

    }

    else if (proyecto === "tecnologia") {

        alert(
            "Aquí colocarás el enlace de TechStore."
        );

    }

    else if (proyecto === "barberia") {

        alert(
            "Aquí colocarás el enlace de Black Crown Barber."
        );

    }

    else if (proyecto === "restaurante") {

        alert(
            "Aquí colocarás el enlace de Sabor Urbano."
        );

    }

    else if (proyecto === "dental") {

        alert(
            "Aquí colocarás el enlace de DentalCare."
        );

    }

}


function abrirWhatsApp() {

    const telefono =
        "59100000000";

    const mensaje =
        "Hola Alexander, vi tu portafolio y estoy interesado en una página web.";

    const enlace =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(enlace, "_blank");

}


const formulario =
    document.getElementById("formularioContacto");


formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nombre =
            document.getElementById("nombre").value;

        const tipoPagina =
            document.getElementById("tipoPagina").value;

        const mensaje =
            document.getElementById("mensaje").value;


        const textoWhatsApp =
            "Hola Alexander. Mi nombre es " +
            nombre +
            ". Estoy interesado en: " +
            tipoPagina +
            ".%0A%0A" +
            mensaje;


        const telefono =
            "59100000000";


        const enlace =
            "https://wa.me/" +
            telefono +
            "?text=" +
            encodeURIComponent(textoWhatsApp);


        window.open(
            enlace,
            "_blank"
        );

    }
);