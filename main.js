`use strict`
const images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];

let containerItems = document.getElementById("items");
for (let i = 0; i < images.length; i++) {
    const img = `<div class="item"><img src="${images[i]}"></div>`;
    containerItems.innerHTML += img; 

    const btnGenerator = document.querySelector ("prev");
    btnGenerator.addEventListener(`click`, function() {
        const img = `<div class="item"><img src="${images[1]}"></div>`;
        element.classList.add('active');
        containerItems.innerHTML += img;
    }
}


/* let btnAddImage = document.querySelectorAll(".fa-solid");
btnAddImage.onclick = function() {
var img = document.createElement("img");
img.src = "./img/02.jpg";
document.innerHTML.appendChild(img);
} */
console.log(document.querySelectorAll(".item"));