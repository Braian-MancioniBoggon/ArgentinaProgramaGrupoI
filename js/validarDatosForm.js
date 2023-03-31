
                                 //VALIDAR DATOS DEEL FORMULARIO
function validarDatosForm(){
let campoNombre = $(".campoContactoName").val();
let campoMail = $(".campoContactoMail").val();
let campoTel = $(".campoContactoTel").val();
let campoConsulta = $("campoContactoConsulta").val();
if(campoNombre === "" || campoMail === "" || campoTel === "" ){
alert("Faltan datos en el formulario por ingresar, Por favor complete el formulario");
$(".campoContactoName").val('');
$(".campoContactoMail").val('');
$(".campoContactoTel").val('');
$(".campoContactoConsulta").val('');
}else{
alert("Datos enviados correctamente");
$(".campoContactoName").val('');
$(".campoContactoMail").val('');
$(".campoContactoTel").val('');
$(".campoContactoConsulta").val('');
}
}







