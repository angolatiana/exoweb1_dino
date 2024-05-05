const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");

window.addEventListener("keydown", function(event) {
    const touche = event.key;
    if (touche === " ") {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
            if (collision(dino, cactus)) {
                alert("Game over");
            }
        }, 1000);
    }
});

function collision(dino, cactus) {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();
    
    return (
        dinoRect.left < cactusRect.right &&
        dinoRect.right > cactusRect.left &&
        dinoRect.top < cactusRect.bottom &&
        dinoRect.bottom > cactusRect.top
    );
}