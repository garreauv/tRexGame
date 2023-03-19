// Variable pour savoir si le jeu est en cours
let isPlaying = false;

// Variable correspondant au dinosaure
let dino = document.getElementById("dino");

// Variable correspondant au message de fin
let reload = document.getElementById("reload");

// Variable correspondant au cactus
let cactus = document.getElementById("cactus");

// Variable correspondant au score
let score = document.getElementById("score");

// Constante correspodant au message de début de jeu
const message = document.getElementById("game-message");


// Fonction permettant de sauter
function jump() {
    if(dino.classList != "jump-animate"){
        dino.classList.add("jump-animate");
    }
    setTimeout(function() {
        dino.classList.remove("jump-animate");
    }
    , 400);
}

function handleStart(){
    cactus.classList.add("cactus-animate");
    score.innerHTML = 0;
    // Permet de cacher le message de début de jeu
    message.style.display = "none";
}

// Détection de la touche espace
document.addEventListener('keydown', function(event) {
    if(event.code === 'Space' && isPlaying) {
        jump();
    }
    if(!isPlaying && event.code === 'Space' && score.innerHTML == 0){
        isPlaying = true;
        handleStart();
    }

  });


// Permet d'augmenter le score
let increaseScore = setInterval(function() {
    if(isPlaying){
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }
}, 170);


// Vérification de la collision
let checkDead = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 350){ // 350 = 520 - 100 - 70 (520 = hauteur du sol, 100 = hauteur du dino, 70 = hauteur du cactus)
        cactus.style.animation = "none";
        cactus.style.display = "none";
        isPlaying = false;
        reload.style.display = "block";
        alert("Game Over");
    }
}, 10);

