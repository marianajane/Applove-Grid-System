/*
 * Archivo principal de funcionalidad de JS
 */
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var img=[];
var span=[];
for (var i = 0 ; i < 9; i++) {
   img[i]= document.getElementsByClassName("mostrar-img")[i];
   img[i].addEventListener('click', mostrar);
 }
function mostrar(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for(var i=0 ; i<9 ;i++){
 span[i] = document.getElementsByClassName("close")[i];
 span[i].addEventListener("click", cerrar)
}

function cerrar() {
    modal.style.display = "none";
}