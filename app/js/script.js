const menu= document.getElementById("menu");
const overlay= document.getElementById("overlay");

document.getElementById("humburger").addEventListener("click", function (){
    if(humburger.classList.contains("open")){
        humburger.classList.remove("open");
        menu.classList.remove("visible-menu");
        overlay.classList.remove("visible-overlay");
    }
    else{
        humburger.classList.add("open");
        menu.classList.add("visible-menu");
        overlay.classList.add("visible-overlay");
    }
})