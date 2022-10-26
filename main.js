`use strict`
const images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];

let containerItems = document.getElementById("items");
for (let i = 0; i < images.length; i++) {
    const img = `<div class="item"><img src="${images[i]}"></div>`;
    containerItems.innerHTML += img; 
}

let active = 0;
active = active + 1;

