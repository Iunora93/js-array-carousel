`use strict`
const images = ["./img/01.jpg", "./img/01.jpg", "./img/01.jpg", "./img/01.jpg", "./img/01.jpg"];

for (let i = 0; i < images.length; i++) {
    `<div class="item"><img src="${images[i]}"></div>`;
    document.querySelectorAll(".item").innerHTML = ${images[i]}; 
}