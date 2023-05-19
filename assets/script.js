let wid = window.screen.availWidth;
let menu = document.getElementById("links");
let nav = document.querySelector("nav");
function Menu(){
    if(wid<=900){
        console.log(wid);
//ESTILIZAÇÃO DO MENU DESLIZANTE
        menu.style.position="absolute";
        menu.style.top="100px";
        menu.style.right="0";
        menu.style.translate="100%";
        menu.style.flexDirection="column";
        menu.style.width="0%";
        menu.style.height="90%";
        menu.style.backgroundColor="rgb(0, 0, 19)";
        menu.style.justifyContent="space-around";
        menu.style.overflow="hidden";
//CRIAÇÃO E APADRINHAMENTO DA IMG MENU HAMBURGUER
        let imgMenu = document.createElement("img");
        imgMenu.src="assets/images/icon-menu.svg";
        nav.appendChild(imgMenu);
        imgMenu.id="open";
        let bg = document.getElementById("bg");
        bg.src="assets/images/image-web-3-mobile.jpg";
        let btn = document.querySelectorAll("nav img")[1];
        btn.addEventListener("click", btnMenu);
    }
}
//FUNÇÃO ABRE E FECHA MENU
function btnMenu(){
    let buttonType = document.querySelectorAll("nav img")[1].id;
    console.log(buttonType);
    if(buttonType=="open"){
        menu.style.width="50%";
        menu.style.right="50%";
        menu.style.transition="0.5s";
        let buttonType = document.querySelectorAll("nav img")[1].id="close";
        let imgMenu=document.getElementById("close");
        imgMenu.src="assets/images/icon-menu-close.svg";
    }
     else if(buttonType=="close"){
        menu.style.width="0%";
        menu.style.right="0";
        menu.style.translate="100%";
        menu.style.transition="0.5s";
        let buttonType = document.querySelectorAll("nav img")[1].id="open";
        let imgMenu=document.getElementById("open");
        imgMenu.src="assets/images/icon-menu.svg";
     }
    
}