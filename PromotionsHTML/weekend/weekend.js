// Header Nav

let threeLinesB =  document.getElementById("threeLinesB");
let menuDesplegable = document.getElementById("menuDesplegable");

let promotionsP = document.getElementById("promotionsP")
let promotionsB = document.getElementById("promotionsB");
let promotionsMenu = document.getElementById("promotionsMenu")

let productsP = document.getElementById("productsP")
let productsB = document.getElementById("productsB");
let productsMenu = document.getElementById("productsMenu")

let storesP = document.getElementById("storesP")
let storesB = document.getElementById("storesB");
let storesMenu = document.getElementById("storesMenu")

threeLinesB.addEventListener("click",showIt);

promotionsP.addEventListener("click",showIt)
promotionsB.addEventListener("click",showIt);

productsP.addEventListener("click",showIt)
productsB.addEventListener("click",showIt);

storesP.addEventListener("click",showIt)
storesB.addEventListener("click",showIt);

function showIt(ev){
    switch(ev.target.id){
        case "threeLinesB":
            menuDesplegable.classList.add("show");

            threeLinesB.classList.add("closeB");

            threeLinesB.removeEventListener("click",showIt)
            threeLinesB.addEventListener("click",hideIt);
            break;
        case "promotionsB":
        case "promotionsP":
            promotionsMenu.classList.add("show");

            promotionsB.removeEventListener("click",showIt);
            promotionsP.removeEventListener("click",showIt);

            promotionsB.addEventListener("click",hideIt);
            promotionsP.addEventListener("click",hideIt);
            break;
        case "productsB":
        case "productsP":
            productsMenu.classList.add("show");

            productsB.removeEventListener("click",showIt);
            productsP.removeEventListener("click",showIt);

            productsB.addEventListener("click",hideIt);
            productsP.addEventListener("click",hideIt);
            break;
        case "storesB":
        case "storesP":
            storesMenu.classList.add("show");

            storesB.removeEventListener("click",showIt);
            storesP.removeEventListener("click",showIt);

            storesB.addEventListener("click",hideIt);
            storesP.addEventListener("click",hideIt);
            break;
        default:
            break;
    }
}

function hideIt(ev){
    switch(ev.target.id){
        case "threeLinesB":
            menuDesplegable.classList.remove("show");

            threeLinesB.classList.remove("closeB");
            
            threeLinesB.removeEventListener("click",hideIt)
            threeLinesB.addEventListener("click",showIt);
            break;
        case "promotionsB":
        case "promotionsP":
            promotionsMenu.classList.remove("show");

            promotionsB.removeEventListener("click",hideIt);
            promotionsP.removeEventListener("click",hideIt);

            promotionsB.addEventListener("click",showIt);
            promotionsP.addEventListener("click",showIt);
            break;
        case "productsB":
        case "productsP":
            productsMenu.classList.remove("show");

            productsB.removeEventListener("click",hideIt);
            productsP.removeEventListener("click",hideIt);

            productsB.addEventListener("click",showIt);
            productsP.addEventListener("click",showIt);
            break;
        case "storesB":
        case "storesP":
            storesMenu.classList.remove("show");

            storesB.removeEventListener("click",hideIt);
            storesP.removeEventListener("click",hideIt);

            storesB.addEventListener("click",showIt);
            storesP.addEventListener("click",showIt);
            break;
        default:
            break;
    }
}