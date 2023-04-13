// window.addEventListener('load', function(){
// const  slider=document.getElementById("slider");
// const imagenes =["imange1.jpg", "imange2.jpg","imange3.jpg"];
// let index = 0;

// const cambiarImagenes= function(){
//     var camino='imagenes/' + imagenes[index];
//     slider.src= camino;

//     if (index < imagenes.length-1)
//     {
//         index ++;
//     }
//     else{
//         index = 0;
//     }
// }
// cambiarImagenes();
// this.setInterval(cambiarImagenes,5000);0



const toggleButton = document.getElementsByClassName(navbar-toggle)[0];
const navbarLinks = document.getElementsByClassName(navbar-links);

toggleButton.addEventListener('click', function () {
    for (let i = 0; i < navbarLinks.length; i++){
        navbarLinks[i].classList.toggle('active');
    }
});
// })