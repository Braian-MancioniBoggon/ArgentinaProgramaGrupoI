//Valido todos los campos del formulario
$(document).ready(function() {
    $("#contactoFooter").validate(
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
                consultaFooter:{
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
                    required: "Éste campo es obligatorio",
                }
            }
        }
    )
});

let nombreFooter = document.getElementById("nombreFooter");
let mailFooter = document.getElementById("mailFooter");
let telefonoFooter = document.getElementById("telefonoFooter");
let consultaFooter = document.getElementById("consultaFooter");
let enviarConsultaFooter = document.getElementById("enviarConsultaFooter");

let enviarConsulta = () => {
    if ($("#nombreFooter").valid() == true && $("#mailFooter").valid() == true && $("#telefonoFooter").valid() == true && $("#consultaFooter").valid() == true){
        nombreFooter.value="";
        mailFooter.value="";
        telefonoFooter.value="";
        consultaFooter.value="";
    }
};

enviarConsultaFooter.addEventListener("click", enviarConsulta);