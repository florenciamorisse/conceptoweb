let menu_hamburguesa= document.getElementById("menu");
let menu_desplegable= document.getElementById("menu_desplegable");

menu_hamburguesa.addEventListener("click", function desplegar(){
    menu_desplegable.classList.toggle("show");
})



