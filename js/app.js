let img = document.getElementById("slider-image");
let anteriorImg = document.getElementById("anterior-img");
let siguienteImg = document.getElementById("siguiente-img");

let imagenActual = 10;
let i = 0;
let imageGenerator = (id) => `https://picsum.photos/id/${id}/1920/1080`;

// setInterval(() => {
//     if (i > 2) {
//         imagenActual = 10;
//         i = 0;
//     }
//     img.src = imageGenerator(imagenActual);
//     imagenActual += 10;
//     i++;
// }, 2000);

anteriorImg.onclick = function () {
    imagenActual -= 10;
    img.src = imageGenerator(imagenActual);
};

siguienteImg.onclick = function () {
    imagenActual += 10;
    img.src = imageGenerator(imagenActual);
};
