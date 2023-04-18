//Declaro todos los elementos que voy a utilizar
const nombreFooter = document.getElementById("nombreFooter");
const mailFooter = document.getElementById("mailFooter");
const telefonoFooter = document.getElementById("telefonoFooter");
const consultaFooter = document.getElementById("consultaFooter");
const btnEnviarFooter = document.getElementById("btnEnviarFooter");

//Valido todos los campos del formulario
$(document).ready(function () {
    $("#formularioFooter").validate(
        {
            rules: {
                nombreFooter: {
                    required: true,
                    minlength: 4
                },
                mailFooter: {
                    required: true,
                    email: true
                },
                telefonoFooter: {
                    required: true,
                    number: true,
                    minlength: 10
                },
                consultaFooter: {
                    required: true
                }
            },
            messages: {
                nombreFooter: {
                    required: "Este campo es obligatorio",
                    minlength: "Debe tener al menos 4 letras"
                },
                mailFooter: {
                    required: "Éste campo es obligatorio",
                    email: "Mail invalido"
                },
                telefonoFooter: {
                    required: "Éste campo es obligatorio",
                    number: "Número invalido",
                    minlength: "Debe tener 10 numeros contando el codigo de area"
                },
                consultaFooter: {
                    required: "Éste campo es obligatorio"
                }
            }
        }
    )
});

let enviarConsulta = () => {
    if ($("#nombreFooter").valid() && $("#mailFooter").valid() && $("#telefonoFooter").valid() && $("#consultaFooter").valid()) {
        nombreFooter.value = "";
        mailFooter.value = "";
        telefonoFooter.value = "";
        consultaFooter.value = "";
    }
};

btnEnviarFooter.addEventListener("click", enviarConsulta);