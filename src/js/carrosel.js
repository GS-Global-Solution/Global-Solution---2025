let imagens = [
  "./src/assets/carrosel/carrosel1.png",
  "./src/assets/carrosel/carrosel2.png",
  "./src/assets/carrosel/carrosel3.png",
  "./src/assets/carrosel/carrosel4.png",
];

let i = 0;
let tempo = 3000;
let timer;

function slideShow() {
  i++;
  if (i >= imagens.length) i = 0;
  document.getElementById('imgBanner').src = imagens[i];

  timer = setTimeout(slideShow, tempo);
}

// Inicializa o carrossel
slideShow();
