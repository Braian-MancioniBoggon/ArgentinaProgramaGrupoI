//Declaro todos los elementos que voy a utilizar
let nombrePaso1 = document.getElementById("nombrePaso1");
let mailPaso1 = document.getElementById("mailPaso1");
let modeloPaso2 = document.getElementById("modeloPaso2");
let problemaPaso2 = document.getElementById("problemaPaso2");
let nombrePaso3 = document.getElementById("nombrePaso3");
let mailPaso3 = document.getElementById("mailPaso3");
let modeloPaso3 = document.getElementById("modeloPaso3");
let problemaPaso3 = document.getElementById("problemaPaso3");
let paso1 = document.getElementById("paso1");
let paso2 = document.getElementById("paso2");
let paso3 = document.getElementById("paso3");
let btnPaso1 = document.getElementById("btnPaso1");
let btnPaso2 = document.getElementById("btnPaso2");
let btnPaso3 = document.getElementById("btnPaso3");
let avisoDeEnvio = document.getElementById("avisoDeEnvio");



//Guardo los valores de los inputs del paso 1 en los inputs del paso 3 ademas de ocultar el paso 1 y mostrar el paso 2
let verPaso2 = () => {
    nombrePaso3.value=nombrePaso1.value;
    mailPaso3.value=mailPaso1.value;
    paso1.style.display="none";
    paso2.style.display="flex";
};

//Guardo los valores de los inputs del paso 2 en los inputs del paso 3 ademas de ocultar el paso 2 y mostrar el paso 3
let verPaso3 = () => {
    modeloPaso3.value=modeloPaso2.value;
    problemaPaso3.value=problemaPaso2.value;
    paso2.style.display="none";
    paso3.style.display="flex";
};

//Oculto el paso 3 y muestro nuevamente el paso 1 pero con el texto de "Solicitud enviada..."
let verPaso1 = () => {
    paso3.style.display="none";
    paso1.style.display="flex";
    avisoDeEnvio.style.display="block";

};

//Al apretar el boton del paso 1 va a llamar a la función "verPaso2"
btnPaso1.addEventListener("click", verPaso2);

//Al apretar el boton del paso 2 va a llamar a la función "verPaso3"
btnPaso2.addEventListener("click", verPaso3);

//Al apretar el boton del paso 3 va a llamar a la función "verPaso1"
btnPaso3.addEventListener("click", verPaso1);

