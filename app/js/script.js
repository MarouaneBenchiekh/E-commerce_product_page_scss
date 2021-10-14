//Mobile menu
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

//slider
const items = document.querySelectorAll(".slider");
const nbSlide = items.length;
const next = document.getElementById("next");
const previous = document.getElementById("previous");
let count = 0;
console.log(next);

function nextSlide(){
    items[count].classList.remove('active');
    if(count < nbSlide - 1){
        count++;
    }
    else {
        count = 0;
    }
    items[count].classList.add('active');
    console.log("ksjios")
}
next.addEventListener("click", nextSlide)

function previousSlide(){
    items[count].classList.remove('active');
    if(count > 0){
        count--;
    }
    else {
        count = nbSlide-1;
    }
    items[count].classList.add('active');
    console.log("ksjios")
}
previous.addEventListener("click", previousSlide)