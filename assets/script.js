let link = document.querySelectorAll("a");
let menu = document.getElementById("links");
let nav = document.querySelector("nav");
let createHamburguer = false;
window.addEventListener("resize", Menu);
window.addEventListener("load", Menu);
function Menu(){
//CRIAÇÃO E APADRINHAMENTO DA IMG MENU HAMBURGUER
let wid = window.innerWidth;
console.log(wid);
        if(wid<=500 && createHamburguer == false){
            let imgMenu = document.createElement("img");
            imgMenu.src="assets/images/icon-menu.svg";
            nav.appendChild(imgMenu);
            imgMenu.id="open";
            let bg = document.getElementById("bg");
            bg.src="assets/images/image-web-3-mobile.jpg";
            let btn = document.querySelectorAll("nav img")[1];
            btn.addEventListener("click", btnMenu);
            createHamburguer=true;
        }
        else if(wid>500 && createHamburguer==true){
            document.querySelectorAll("nav img")[1].remove();
        }
}
//FUNÇÃO ABRE E FECHA MENU
function btnMenu(){
    let buttonType = document.querySelectorAll("nav img")[1];
    if(buttonType.id=="open"){
        buttonType.src="assets/images/icon-menu-close.svg";
        menu.style.right="65%";
        menu.style.transition="0.3s";
        buttonType.id="close";
    }
    else if(buttonType.id=="close"){
        buttonType.src="assets/images/icon-menu.svg";
        menu.style.right="0px";
        menu.style.transition="0s";
        buttonType.id="open";
    }
}