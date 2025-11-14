const button = document.getElementById("button");

function randomColor() {
    return `hsl(${Math.random() * 360}, 50%, 80%)`;
}

// applies random background color after clicking
button.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
});