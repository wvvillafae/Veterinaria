let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}

function verifi(){

    let Usuario = document.getElementById("Usuario").value;
    let Contraseña = document.getElementById("Contraseña").value;

    alert(`Usuario: ${Usuario} Contraseña: ${Contraseña}`);
}

/* $(document).ready(function(){
    
    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight"); 
                } else {
                label.removeClass("highlight");   
                }   
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight"); 
            } 
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });
    
});
 */
/* const pass = document.getElementById("pass"),
      icon = document.querySelector(".bx");

icon.addEventListener("click", e=> {
    if (pass.type === "password") {
        pass.type = "text";
    } else{
        pass.type = "password"
    }
})
 */
let mostrar = document.getElementById("mostrar")

let Contraseña2 = document.getElementById("Contraseña2")
mostrar.addEventListener("click", ()=>{
    if(Contraseña2.getAttribute("type")=="password"){
        Contraseña2.setAttribute("type", "text")
    }else{
        Contraseña2.setAttribute("type", "password")
    }
})


/* let mostrar = document.getElementById("mostrar")

let Contraseña2 = document.getElementById("Contraseña2")

const mostrarCon =()=>{
    if(Contraseña2.getAttribute("type")=="password"){
        Contraseña2.setAttribute("type", "text")
    }else{
        Contraseña2.setAttribute("type", "password")
    }

} */


